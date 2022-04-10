
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  isComplete: any;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  
  
  @Input() quote: Quote | undefined;
  @Output() deleteQuote = new EventEmitter<boolean>();


  Delete(yesDelete: boolean) { 
    this.deleteQuote.emit(yesDelete);
  }


   ngOnInit(): void {
   }

}
