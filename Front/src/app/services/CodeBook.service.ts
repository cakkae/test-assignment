import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CodeBook } from '../models/CodeBook';
import { CodeBookKey } from '../models/CodeBookKey';

@Injectable({
  providedIn: 'root'
})
export class CodeBookService {

  Url: string;
  token: string;
  header: any;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:5000/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  AddCodeBook(codeBook: CodeBook) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<CodeBookKey>(this.Url + 'CodeBook/addCodeBook', codeBook, httpOptions);
  }

  GetAllCodeBook() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<CodeBookKey[]>(this.Url + 'CodeBook', httpOptions);
  }

  GetParentCodeBook() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<CodeBookKey[]>(this.Url + 'CodeBook/parent', httpOptions);
  }

  GetCodeBookByKey(key: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<CodeBookKey[]>(this.Url + 'CodeBookKey/' + key, httpOptions);
  }

}
