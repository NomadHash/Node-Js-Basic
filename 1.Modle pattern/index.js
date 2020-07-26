// module.js에서 생성한 객체 모듈 불러오기
const calculator = require('./module');

console.log(calculator.a);// Park
console.log(calculator.add(1,2)); // 3
console.log(calculator.min(3,2)); // 1