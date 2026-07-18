import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable-test',
  imports: [],
  templateUrl: './observable-test.html',
  styleUrl: './observable-test.css',
})
export class ObservableTest implements OnInit{
  obs!: Observable<unknown>;
  
  ngOnInit(): void {
    this.obs = new Observable((observer)=>{
      try{
      console.log("Observable is tesing here");
      observer.next(2+2);
      setTimeout(() => {
        observer.next(3+3);
      }, 2000);
      setTimeout(() => {
        observer.next(4+4);
      }, 4000);
      throw new Error("Error is testing");
      observer.next("Complete");
      }catch(err){
        observer.error(err);
      }
    });
    
    console.log("Observable is testing before subscribe");
    const subscription = this.obs.subscribe(x =>{
      console.log(x);
    });
    console.log("Observable is testing after subscribe");
    subscription.unsubscribe();

  }
}

