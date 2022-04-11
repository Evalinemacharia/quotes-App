// import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

   export class Quote {
       id!: number;
       Quote!: string; 
        Author!: string; 
        Postedby!:string;     
       Upvotes: number;
       downvotes: number;
    
       completeDate!:Date;
     showQuote: boolean = false;
     showDetails: boolean = false;
     
    //    showQuote:boolean;
    //    showMore:boolean;
       
     
       
       
    

      constructor(id:number ,Quote: string, Author: string,Postedby:string, Upvotes: number,  downvotes: number,completeDate: Date) {
            this.id = id;
            this.Quote = Quote;
            this.Author =  Author;
            this.Postedby = Postedby;
           this.Upvotes = Upvotes;
           this.downvotes = downvotes; 
           this.completeDate =  completeDate;
           
        //    this.showQuote = false;
        //    this.showMore = false;
           
           
            
       }
    
   }
