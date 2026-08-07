

import {Employee} from "./50_Encapsulation.js"

const e1=new Employee(101,"pooja");
e1.show();
//e1.#salary=90000;//SyntaxError: Private field '#salary' must be declared in an enclosing class
//console.log(e1.#salary);//SyntaxError: Private field '#salary' must be declared in an enclosing class

console.log(e1.getSalary());//50000
e1.setSalary(90000);
console.log(e1.getSalary());//90000