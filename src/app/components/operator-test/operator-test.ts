import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, of, interval, concat, merge, from } from 'rxjs';
import { map, reduce, filter, take } from 'rxjs/operators';
const studentList = from([
  {id:1, name:"John", grade:96},
  {id:2, name:"Jane", grade:84},
  {id:3, name:"Bob", grade:100},
  {id:4, name:"Alice", grade:65},
  {id:5, name:"Mike", grade:90}
]); 

@Component({
  selector: 'app-operator-test',
  imports: [],
  templateUrl: './operator-test.html',
  styleUrl: './operator-test.css',
})
export class OperatorTest implements OnInit {
  ngOnInit(): void {

    //Map operator example to transform the values emitted by an observable
    let obs = of(1, 2, 3, 4, 5);
    let doubleArr: number[] = [];
    obs.pipe(map(x => x * 2)).subscribe({
      next: (value) => doubleArr.push(value),
      error: (err) => console.log(err),
      complete: () => console.log("Map transform double Array Observable is completed")
    });
    
    //Interval, Pipe and Take operator example to emit values at regular intervals and limit the number of emissions
    const observable = interval(1000).pipe(take(10));
    observable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log("Interval Observable is completed")
    });

    //Map operator example to transform the values emitted by an observable
    let obsArr = of(1, 2, 3, 4, 5).pipe(map((x, index) => {
      return {count:x * 2,id:index}
    }));
    let arrToObject: {count:number, id:number}[] = [];
    obsArr.subscribe({
      next: (value) => arrToObject.push(value),
      error: (err) => console.log(err),
      complete: () => console.log("Map transform to Object Observable is completed")
    });

    let numArr = of(1, 2, 3, 4, 5);
    let sum = numArr.pipe(reduce((acc, curr) => acc + curr, 0));
    sum.subscribe((value) => console.log("Sum of array is: ", value));

    //Reduce operator example to count the number of occurrences of each item in an array
    let duplicateArr = [1, 2, 3, 4, 5, 1, 2, 3];
    let objItemCount = duplicateArr.reduce((object, item) => {
      if (!object[item]) {
        object[item] = 1;
      }else {
        object[item] += 1;
      }
      return object;
      
    },{} as {[key: number]: number});
    console.log("Item counts are: ", objItemCount);
    //Filter operator example to filter out the students with grade greater than or equal to 90
    const topGradeStudentsObservable = studentList.pipe(filter(student => student.grade >= 90));
    let topGradeStudents: {id:number, name:string, grade:number}[] = [];
    topGradeStudentsObservable.subscribe({
      next: (value) => topGradeStudents.push(value),
      error: (err) => console.log(err),
      complete: () => console.log("Filtered Observable is completed", topGradeStudents)
    });

    //Concat operator example to combine multiple observables into a single observable
    const obs1 = of(1, 2, 3);
    const obs2 = of(4, 5, 6);
    const obs3 = of(7, 8, 9);
    const combinedObservable = concat(obs1, obs2, obs3);
    let concatArr: number[] = [];
    combinedObservable.subscribe({
      next: (value) => concatArr.push(value),
      error: (err) => console.log(err),
      complete: () => console.log("Concat Observable is completed", concatArr)
    });

    //Merge operator example to combine multiple observables into a single observable that emits values from all the source observables
    const obs4 = interval(3000).pipe(take(3));
    const obs5 = interval(2000).pipe(take(4));
    const mergedObservable = merge(obs4, obs5);
    let mergeArr: number[] = [];
    mergedObservable.subscribe({
      next: (value) => mergeArr.push(value),
      error: (err) => console.log(err),
      complete: () => console.log("Merge Observable is completed", mergeArr)
    });
  }

}

