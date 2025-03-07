import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import {Subscription} from "rxjs";
import {BookServiceService} from "../../services/book-service.service";

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BookServiceService);
  books: Book[] = [];
  private subscription: Subscription | null = null;

  ngOnInit() {
    this.subscription=this.bookService.findAll().subscribe((data) => {this.books = data});
  }
  ngOnDestroy():void {
    this.subscription?.unsubscribe();
  }
}
