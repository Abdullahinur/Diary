import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { HighlightDirective } from './highlight.directive';
import { JournalFormComponent } from './journal-form/journal-form.component';


@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    JournalDetailsComponent,
    HighlightDirective,
    JournalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
