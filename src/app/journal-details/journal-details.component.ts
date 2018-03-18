import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Journal} from '../journal'

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {

  @Input() journal:Journal;
  @Output() isComplete= new EventEmitter<boolean>();

  journalDelete(complete:boolean){
      this.isComplete.emit(complete);
    }

  journalComplete(complete:boolean){
      this.isComplete.emit(complete);
    }

  constructor() { }

  ngOnInit() {
  }

}
