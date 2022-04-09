
import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  // @Input()
  // quote!: Quote;
  @Input() quote!:Quote
   constructor() { }

   ngOnInit(): void {
   }

}
