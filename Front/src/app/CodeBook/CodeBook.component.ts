import { CodeBookKey } from './../models/CodeBookKey';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeBook } from '../models/CodeBook';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeBookService } from '../services/CodeBook.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-codebook',
  templateUrl: './CodeBook.component.html',
  styleUrls: ['./CodeBook.component.css']
})
export class CodeBookComponent implements OnInit {

  data = false;
  codeBooks: CodeBookKey[] = [];
  lastId: any;
  selectedCodeBook: CodeBookKey;
  addCodeBookForm; addParentCodeBookForm: FormGroup;
  message: string;

  constructor(
    private http: HttpClient, private fb: FormBuilder,
    private codeBookService: CodeBookService, private toastr: ToastrService) { }

  showSuccess(message, title) {
    this.toastr.success(message, title);
  }

  ngOnInit() {
    this.getValues();
    this.createFormChild();
  }

  createFormChild() {
    this.addCodeBookForm = this.fb.group({
      codeBookName: ['', Validators.required]
    });
  }

  onFormSubmit(parent: boolean = false) {

    const codeBook: CodeBook = {
      id: parent ? this.selectedCodeBook.id : 0,
      codeBookName: this.addCodeBookForm.value.codeBookName
    };

    this.codeBookService.AddCodeBook(codeBook).toPromise().then((response: CodeBookKey) => {
      this.data = true;
      this.message = codeBook.codeBookName + ' successfully added NODE';
      this.showSuccess(this.message, 'Successfully');
      this.addCodeBookForm.reset();

      response.children = [];
      
      if (!parent) {
        this.codeBooks.push(response);
      } else {
        this.selectedCodeBook.children.push(response);
      }

    });
  }

  onSelect(codeBook: CodeBookKey): void {

    this.selectedCodeBook = codeBook;

    if (codeBook.children.length === 0) {
      this.http.get('http://localhost:5000/CodeBookKey/' + codeBook.id).subscribe((response: CodeBookKey[]) => {
        codeBook.children = response.map(x => {
          x.children = [];
          return x;
        });
        codeBook.isOpen = true;
      }, error => {
        console.log(error);
      });
    } else {
      codeBook.isOpen = !codeBook.isOpen;
    }
  }

  getValues() {
    this.http.get('http://localhost:5000/CodeBookKey').subscribe((response: CodeBookKey[]) => {
      this.codeBooks = response.map(x => {
        x.children = [];
        return x;
      });

      console.log(this.codeBooks);
    }, error => {
      console.log(error);
    });
  }
}
