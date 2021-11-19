// 인터페이스
interface User {
  name: string;
  age: number;
}

// 0. 변수에 사용하는 경우
const seho: User = { name: "hi", age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 인터페이스 확장
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ?. 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
}
const joo: Developer = { name: "joo", age: 20, language: "ts" };

///////

interface User {
  name: string;
  age: number;
}

const u1: User = {
  name: " abc",
  age: 30,
};

// 1. 가장 많이 활용되는 예 -> 함수의 인자에 인터페이스 활용
function addUser(user: User): void {
  console.log(user);
}

interface typedef {
  name: string;
  age: number;
  sex: boolean;
}

const deleteUser = (index: number, st?: string, ...args: number[]): void => {
  console.log("foo");
};

// 2. 함수 인터페이스
// 스니펫 형태로 만들어 놓고 협업 하기에 유용

interface func {
  (a: number, b: number): number;
}

var func1: func;

// 1
func1 = function (a, b) {
  return 1;
};

// 2
const func2: func = () => {
  return 1;
};

// 3. 인덱싱(배열에 적용)

interface stringArray {
  [index: number]: string;
}

let strArr: stringArray = ["a", "b", "c"];
let strArr2: string[] = ["asdf", "asdf", "asdf"];

// 3. 인터페이스 딕셔너리 패턴 ***

interface StringRegexDic {
  // 객체에 적용 가능한듯
  // 일반 객체 인터페이스완 다르게 key값 또한 타이핑 적용 가능
  [key: string]: RegExp; // key : value
}

var obj2: StringRegexDic = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 4. 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentNum?: number;
}7

let s1: Student = {
  name: "amy",
  age: 30,
};


