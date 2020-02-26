import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { StoreModule } from '@ngrx/store';
import * as fromaApp from './store/app.reducer';
import { BookCardComponent } from './book-search/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromaApp.appReducer)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
