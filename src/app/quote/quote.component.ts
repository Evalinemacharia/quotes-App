
import { Component, OnInit } from '@angular/core';
import { Quote } from  '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  quote:Quote[] = [
    new Quote(1,  "Do your best at all times","Austin", 0,0,new Date(2022, 2, 14)),
      new Quote(2,  "Positive anything is better than negative nothing","EVA", 0,0,new Date(2022,4,12) ),
      new Quote(3, "Miracles happen to those who believe in them","Bernhard Breson",0,0,new Date(2022,1,10) ),
      new Quote(4, "One positive thought can change your whole day","Zig Zaglar",0,0,new Date(2022,2,5)),   
   ];

   deleteGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].Quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }


  constructor() {}
  ngOnInit(): void {}
  } 
  


