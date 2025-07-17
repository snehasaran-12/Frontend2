// // function demo(name)
// // {
// //     console.log(name)
// // }
// // function call(callback)
// // {
// //     callback("kumar")

// // }
// // call(demo)


// // let data=new Set([...[1,2,3],[4,5,6]])
// // let arr=[...data]
// // console.log(arr instanceof Array )
 

// // const ap=new Map([
// //     ["name","kumar"],
// //     ["age",23],
// //     ["salary",120000]
// // ])

// // map.set("name","ganesh")
// // console.log(map.get("name"))
// // for(let [key,value] of map)
// // {
// //     console.log(key,value)
// // }

//  let numbers = [1,2,3,4 ];
//  let doubled = numbers.map(function(num){
//         return num * 2;
//  });
//  console.log(doubled);

//  let number = [1,2,3,4];
//  let squared = number.map(num=>num * num);
//  console.log(squared);

//  let names = ["smeha","krishna","john"];
//  let greeting = names.map((name,index)=> `${index + 1}. Hello, ${name}!`);
    
//  console.log(greeting);
  


// let colors = new Set(["red", "green", "blue", "red"]); 
// for (let color of colors) {
//   console.log(color);
// }


// let fruits = ["orange","apple","mango","apple"];
// let uniquefruits =[...new Set(fruits)];
// console.log(uniquefruits);

// let set = new Set (["1","2","3","4"]);
//   for (let value of set){
//     console.log(value);
//   }
  
// //   let get = new Set([1,2,3]);
// //   let arr = [...set];
// //   Array.from(get)
 
//   let nums = [ 1,2,2,3,4,4];
//   let unique = [...new Set(nums)];
//   console.log(unique);

//   let ans = [1,2,3,34];
//   let add = [...new Set(ans)];
//   console.log(add);

// let userMap = new Map([
//   ["name","john"],
//   ["age",30],  
// ]);
// for (let [key, value] of userMap) {
//     console.log(key, value);
// }

// let map = new Map([["a",1],
// ["b",2]]);
// let obj = Object.fromEntries(map);
// console.log(obj);

// let arrs = [...map];
// console.log(arr);

// let  name = "Divya";
// console.log(name.toLowerCase()); 
// console.log(name.toUpperCase()); 



// let text=" Hello World! ";
// console.log(text.trim());
// console.log(text.trimStart());

// let sentence = "java script is fun";
// console.log(sentence.includes("script"))

// console.log(sentence.indexOf("fun"));
// console.log(sentence.startsWith("java"))

// let stsr = "MERN Stack";
// console.log(str.substring(0,4));
// console.log(str.substring(5))

// let msg = "i like the apple and mango"
//  console.log(msg.replace("apple","orange"))
//  console.log(msg.replaceAll("orange","mango"))

//  let csv = "apple,orange,mango";
//  let fruit = csv.split(",")
//  console.log(fruit);

//  let first =" Hello"
//  let second =" World"
//  let message =first.concat("",second)
//  console.log(message)

// let na = ["sneha","ravi","geetha"]
// na.forEach(function(name){
// console.log(name)
// })

// let num = [1,2,3]
// let double = num.map(num => num * num)
// console.log(double)

// let scores = [40, 70, 85, 60];
// let passed = scores.filter(score => score >= 60);
// console.log(passed); 
 
// let users =[
//   { name: "sneha", age:25},
//   { name: "saran", age: 24},
// ]

// let result = users.find(user => user.age > 20)
// console.log(result)

 let nums =[1,5,3,7]

 let hasEven = nums.some(num => num % 2=== 0)
 console.log(hasEven)

 let ages =[18, 19,25,28]
 let allAdults = ages.reduce(age => age >18)
 console.log(allAdults)
 const arr=[40,18,70]
 arr.splice(1,2,40,2)
 console.log(arr)

 let date=new Date();
 console.log(date.getFullYear())

 let dates = new Date()
 date.setDate(5)
 console.log(date)
 let dat = new Date()
 date.setMilliseconds(6)
 console.log(dat)
  
 let datez = new Date( "jan 05,2025")
 date .setFullYear(2020)
 console.log(date)
  let da = new Date()
 date .setMilliseconds(3)
 console.log(da)
 
