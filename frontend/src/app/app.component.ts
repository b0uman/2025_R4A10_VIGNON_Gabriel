import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Book} from "./models/book";
import {BookServiceService} from "./services/book-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      main {
        padding: 2rem;
        max-width: 800px;
        margin: auto;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly bookService = inject(BookServiceService);
  private subscription = new Subscription();

  books: Book[] = [];

  ngOnInit() {
    this.subscription=this.bookService.findAll().subscribe((data) => {this.books = data});
  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
