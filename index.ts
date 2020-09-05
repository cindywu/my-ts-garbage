import * as _ from 'lodash';

async function hello() {
  return 'world'
}

// const url = new URL(...)

// let lucky: any = 23;

// let lucky: number = 23;

// lucky = '23'
// lucky = 23

interface Person {
  first: string;
  last: string;
  [key: string]: any
}

// const person: Person = {
//   first: "Denny",
//   last: "Luan"
// }

// const person2: Person = {
//   first: 'Cindy',
//   last: 'Wu'
// }

// //functions
// function pow(x:number, y:number) {
//   return Math.pow(x, y).toString();
// }

// pow(5, 10)

// //arrays
// type MyList = [number?, string?, boolean?]

// const arr: MyList = []

// arr.push(1)
// arr.push('23')
// arr.push(false)

//generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23)