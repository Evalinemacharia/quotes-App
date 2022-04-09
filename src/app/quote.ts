// import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

   export class Quote {
      id: number;
    //   Author: string;
      quote: string;      
       downvotes: number;
       Upvotes: number;
       
       
    

      constructor(id: number, quote: string, upvotes: number, downvotes: number){
            this.id = id;
           this.quote = quote;
           this.Upvotes = upvotes;
           this.downvotes = downvotes; 
        //    this.Author =  Author;
       }
    
   }
