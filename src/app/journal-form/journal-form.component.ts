import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Journal} from '../journal'

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})
export class JournalFormComponent implements OnInit {
  newJournal = new Journal(0,"","", new Date());
  @Output() addJournal=new EventEmitter<Journal>();

  submitJournal(){
    this.addJournal.emit(this.newJournal);
  }

  constructor() { }

  ngOnInit() {
  }

}
