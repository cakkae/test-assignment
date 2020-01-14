import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CodeBookComponent } from './CodeBook/CodeBook.component';
import { CodeBookSelectComponent } from './CodeBookSelect/CodeBookSelect.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CodeBookComponent },
  { path: 'show', component: CodeBookSelectComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class AppRoutingModule { }
