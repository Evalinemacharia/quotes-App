
import { Component,  EventEmitter,  Input, OnInit, Output,  } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quotes!: Quote;
  // quotes!: any;Quo
  @Output () isComplete = new EventEmitter <boolean> ();
  Upvotes:number=0
  upvote(){
    this.Upvotes+=1;
  }
  downvotes:number =0
  downvote(){
    this.downvotes+=1;

  } 
  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

  
  }

  
  

