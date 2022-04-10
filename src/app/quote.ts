// import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

   export class Quote {
       id!: number;
       Quote!: string; 
        Author!: string;      
       Upvotes!: number;
       downvotes: number;
    
       completeDate!:Date;
       
     
       
       
    

      constructor(id:number ,Quote: string, Author: string, Upvotes: number,  downvotes: number,completeDate: Date) {
            this.id = id;
            this.Quote = Quote;
            this.Author =  Author;
           this.Upvotes = Upvotes;
           this.downvotes = downvotes; 
           this.completeDate =  completeDate;
           
           
            
       }
    
   }
