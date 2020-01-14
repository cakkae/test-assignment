import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { CodeBookComponent } from './CodeBook/CodeBook.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CodeBookSelectComponent } from './CodeBookSelect/CodeBookSelect.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SafePipe } from './Safe.pipe';

@NgModule({
   declarations: [
      AppComponent,
      CodeBookComponent,
      CodeBookSelectComponent,
      SafePipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule,
      DropDownListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
