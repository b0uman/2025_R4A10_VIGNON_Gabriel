import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../../models/book";
import {CommonModule} from "@angular/common";
import {BooksInMemoryService} from "../../services/book-inmemory.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookServiceService} from "../../services/book-service.service";

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
      CommonModule
  ],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  @Output() bookCreation  = new EventEmitter<Book>();
  constructor(private bookInService: BooksInMemoryService, private bookService: BookServiceService) {
  }
  api = true;
  BookForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(35)]),
    description: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(225)]),
    author: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
  })
  onSubmit() {
    if(this.BookForm.valid){
      const newbook = this.BookForm.value as Omit<Book, 'id' |'coverUrl'>;
      if(this.api){
        this.bookService.create(newbook).subscribe((book) => {
          this.bookCreation.emit(book);
          this.BookForm.reset();
      });
      }
      else{this.bookInService.createBook(newbook);
        this.bookCreation.emit();
      }

    }
  }

}
