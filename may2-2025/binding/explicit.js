function hello(name, age) {
  console.log(this.key, `Name: ${name} and age: ${age}`);
}

let obj1 = { key: 1 }
let obj2 = { key: 2 }

// 1. call
// function_name.call(context, argument1, arg2, arg3);
hello.call(obj1, "Kartik", 20);
hello.call(obj2, "Yash", 12);

hello("abc", 10000); // default binding