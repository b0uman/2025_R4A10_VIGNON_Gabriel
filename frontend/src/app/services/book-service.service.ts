import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly API_URL = 'http://127.0.0.1:5000/books';
  constructor(private readonly http: HttpClient) { }
  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL)
  }
  findOne(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL+'/'+id)
  }
  create(book: Omit<Book, 'id' | 'coverUrl'>): Observable<Book> {
    return this.http.post<Book>(this.API_URL, book)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL+'/'+id)
  }
}
