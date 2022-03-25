/// function focusfunction(){
//   document.getElementById("fname").style.background="yellow";
//   document.getElementById("fname").style.borderBlockStyle=" none";
//   document.write("<br>");

// }


// let user = ["md rahmat", "deepak panwar", "aditya"]
// user.unshift("name", "game", "fame")
// document.write(user);
// document.write("<br>")



// let player = ["No.1:- sahis jamal", "No.2 :- sanjeev", " No.3 :- ajeet"];
// for (let i = 0; i < player.length; i++) {
//   document.write(player[i]);
//   document.write("<br>")
// }

// let arr = [1, 2, 3, 4, 5];
// //arr.length = 2;
// arr.length = 5;
// document.write(arr);

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 1, 2, 3]
// ];
// document.write(matrix[1][2]);
// document.write("<br>");

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// document.write("<br>");

// // what's in fruits?
// document.write( shoppingCart.length); // ?


// let styles = ["Jazz","Blues"];  
// styles.push("Rock-n-Roll");
//  styles[Math.floor((styles.length-1)/2)]="Classics";
//  styles.shift();
// styles.unshift("Rap","Reggae");

// // document.write(styles);
// let sum = (a,b)=>a+b;
// document.write(sum(1,2));
// document.write("<br>");

// let multi = a => a*3;
// document.write(multi(2));

// let hii = ()=>document.write("hello!");
// hii()

// let age = prompt("what is your age");
// let welcome =(age<18)?
// ()=> document.write("Hello!"):
// ()=> document.write ("you are greter");
// welcome();


  // function ask(question,yes,no){
  //   if(confirm(question))yes();
  //   else no();
  // }
  //   ask(  
  //     "do you agree?",
  //     ()=>document.write("you agreed"),
  //     ()=>document.write('you cancle the exiqution')
    
  //   );

  let user = {
    name: "md rahmat",
    age: 30,
    rollnumber:1815997,
    toString() {
      return `{name: "${this.name}", age: ${this.age} , rollnumber: ${this.rollnumber}}`;
    }
  };
  
  document.write(user);



