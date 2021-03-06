
import { Component, OnInit, } from '@angular/core';
import { Quote } from  '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  quote:Quote[] = [
    new Quote(1,  "Do your best at all times","Austin",'jane', 1,0,new Date(2022, 2, 14)),
      new Quote(2,  "Positive anything is better than negative nothing","EVA",'Nyash', 3,0,new Date(2022,4,12) ),
      new Quote(3, "Miracles happen to those who believe in them","Bernhard Breson",'Eve',1,0,new Date(2022,1,10) ),
      new Quote(4, "One positive thought can change your whole day","Zig Zaglar",'Cate',3,0,new Date(2022,2,5)),   
   ];

   addNewQuote(quote:any){
    let goalLength = this.quote.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  collection: number[] = this.quote.map(quote=>quote.Upvotes)
  highest = Math.max(...this.collection)
  highlightHighest() {
    /* function for getting quote with highest vote*/
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quote.length; j++) {
      quotesUpvote.push(this.quote[j].Upvotes)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }
   
  // isShowMore = true
  showQuote (index:number){
    this.quote[index].showDetails = !this.quote[index].showDetails;
    // this. isShowMore = !this. isShowMore
  }

   delete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].Quote}?`)

      if (toDelete){
         this.quote.splice(index,1)
      }     
    }  
  
    
}




   constructor() {}

  //  highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].upvotes;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }

}




  




