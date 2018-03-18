import { Component, OnInit } from '@angular/core';
import {Journal} from '../journal'

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {


  journals = [
    new Journal(1, 'Woke up', 'Managed to wake up before sunrise', new Date(2018,3,19)),
    new Journal(2, 'Had Breakfast', 'Fruits, yoghurt and strong tea', new Date(2018,3,19)),
    new Journal(3, 'Went to Moringa', 'Not a lot of traffic despite bad weather', new Date(2018,3,19))
  ]


  deleteJournal(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete "${this.journals[index].name}"`)

        if(toDelete){
            this.journals.splice(index,1)
        }
    }
}
  completeJournal(isComplete,index){
    if (isComplete){
        this.journals.splice(index,1);
        }
        }

  toogleDetails(index){
    this.journals[index].showDescription = !this.journals[index].showDescription;
}


  addNewJournal(journal){
    let journalLength = this.journals.length;
    journal.id=journalLength+1;
    journal.completeDate = new Date(journal.completeDate);
    this.journals.push(journal)
  }
  constructor() { }

  ngOnInit() {
  }

}
