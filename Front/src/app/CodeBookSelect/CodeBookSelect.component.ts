import { Component, OnInit  } from '@angular/core';
import { CodeBook } from '../models/CodeBook';
import { CodeBookService } from '../services/CodeBook.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-CodeBookSelect',
  templateUrl: './CodeBookSelect.component.html',
  styleUrls: ['./CodeBookSelect.component.css']
})
export class CodeBookSelectComponent implements OnInit {

   codeBook: CodeBook[];
   isLoaded = false;
   types$;
   childs$;
   i = 0;
   htmlStr = '';
   htmlResult = 'No result';

  constructor(private _codeBookService: CodeBookService, public fb: FormBuilder) { }

  chooseCodeBook = this.fb.group({
    name: ['']
  });

  getAllCodeBookT() {
    return this._codeBookService.GetAllCodeBook();
  }

  getCodeBookByKeyT(key: number) {
    return this._codeBookService.GetCodeBookByKey(key);
  }

  ngOnInit() {
    this.types$ = this.getAllCodeBookT();
  }

  parentChange(e) {
    this.htmlStr = '<option value="">Choose codebook</option>';
    this.childs$ = this.getCodeBookByKeyT(e.target.value);
    this.childs$.forEach( (child, index) => {
        for (this.i = 0; this.i < child.length; this.i++) {
            this.htmlStr += '<option value=' + child[this.i].codeBook.id + '>' +
                          child[this.i].codeBook.codeBookName + '</option>';
                          this.htmlResult = 'RESULT CHILD: </br>' + child[this.i].codeBook.id + child[this.i].codeBook.codeBookName;
        }

    });
  }

  childChange(e) {
    this.htmlStr = '<option value="">Choose codebook</option>';
    this.childs$ = this.getCodeBookByKeyT(e.target.value);
    this.childs$.forEach( (child, index) => {
      if (child.length > 0) {
        for (this.i = 0; this.i < child.length; this.i++) {
          this.htmlStr += '<option selected value=' + child[this.i].codeBook.id + '>' +
                          child[this.i].codeBook.codeBookName + '</option>';
                          this.htmlResult = 'RESULT CHILD:' + child[this.i].codeBook.id + child[this.i].codeBook.codeBookName;
        }
      } else {
        this.htmlStr = '<option value="" selected>There is no child</option>';
        this.htmlResult = 'There is no more child';
      }
    });
  }

}
