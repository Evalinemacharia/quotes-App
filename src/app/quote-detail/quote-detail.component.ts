
import { Component,  EventEmitter,  Input, OnInit, Output,  } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  Quotes!: Quote;
  quotes: any;
  @Output () isComplete = new EventEmitter <boolean> ();
  Upvotes(){
    this.quotes.Upvotes+=1;
  }
  downvotes(){
    this.quotes.downvotes+=1;

  } 
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

  
  }

  
  

