// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a: number, b: number): number {
  return a + b;
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
log("a", 10);

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
  // 옵셔널 파라미터
  console.log(text);
}
printText("hi");

function S(a: number, b: number): number {
  return a + b;
}
const adddd = (a: number = 20, b?: number = 40): void => {
  console.log(1);
};

const test = (...args: any[]) => {
  console.log(args);
};

test(1, 2, 3);

function test2(a: string, b?: number): string {
  console.log(b);
  return "hello :" + a;
}

test2("fuck", 400);
