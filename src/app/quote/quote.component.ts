
import { Component, OnInit } from '@angular/core';
// import { Quote} from '../quote';
import { Quote } from  '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
          new Quote (1,  "Success is not final; failure is not fatal: It is the courage to continue that counts", 0 ,0),
          new Quote (2,  "It is better to fail in originality than to succeed in imitation", 0  ,0),
          new Quote (3,  "The road to success and the road to failure are almost exactly the same", 0 ,0),
          new Quote (4,  "Success usually comes to those who are too busy looking for it", 0 ,0 ),
          new Quote (5 ,  "Success is getting what you want, happiness is wanting what you get", 0 ,0),
    
   ];




  constructor() { }

  ngOnInit(): void {
  }

}
