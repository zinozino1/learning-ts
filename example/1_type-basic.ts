// 문자열
const str: string = "hello";

// 숫자
const num: number = 10;

// 배열
const arr: Array<string> = [];
arr.push("hi");

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

// 튜플 -> 배열 리터럴 + 위치까지 지정
const address: [string, number] = ["판교", 40];

// 객체
const obj: object = {};
// obj.a = 10;

// 타입 객체
const person: { age: number; name: string } = { age: 100, name: "Capt" };
person.age = 101;

// 진위값
let isLogin: boolean = false;

let ex1: string = "aa";
let ex2: number = 10;
let ex3: string[] = ["11", "22"];
let ex4: [number, string] = [30, "1111"];
