import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Observable, Subscriber, take } from 'rxjs';
import { ObservableTest } from './components/observable-test/observable-test';
import { OperatorTest } from './components/operator-test/operator-test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObservableTest, OperatorTest],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit{
  ngOnInit(): void {
    //
    //observable.subscribe(value => console.log(value));

    let obs = this.sampleTest();
    //console.log(obs);

    // let promise = new Promise((resolve, reject) =>{
    //   let x = "ready";
    //   let y = "ready";

    //   if(x == y){
    //     resolve("Both are equal");
    //     resolve("Send again");
    //   }else{
    //     reject("Both are not equal");
    //   }

    // });

    // promise.then(res =>{
    //   console.log("success",res);
    // }).catch(err =>{
    //   console.log("error",err);
    // });
  }
  protected readonly title = signal('rxjs_tuts');

  sampleTest() {
  return 2+2;
  }

}


