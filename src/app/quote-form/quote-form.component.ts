import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newGoal = new Quote(0,"","",'',0,0,new Date());
@Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newGoal);
this.newGoal=new Quote(0,"","",'',0,0,new Date());
  }
  // addQuote(){
  //   this.add.emit(this.quoted);
  //   this.quoted = new Quote(0,"","",0,0);
  //     }

  constructor() { }

  ngOnInit(): void{
  }

}
// function Output() {
//   throw new Error('Function not implemented.');
// }

