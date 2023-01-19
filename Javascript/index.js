
//-----------------------------------------------------------
//ARROW FUNCTION
// let grades = [100,50,90,40];
// console.log(grades)
// grades.sort((x,y) => {
//     return(y - x);
// }) 

// grades.forEach((ele) =>{
//    console.log(ele);
// })
//-----------------------------------------------------------
//CARD GAME

// let cards = ["A","1","2","3","4","5","6","7","8","9"];
// console.log(cards);
// shuffle(cards);
// console.log(cards);
// function shuffle(array){
//     let currentIndex = array.length;
//     while(currentIndex!=0){
//         let randomIndex = Math.floor(Math.random()*array.length);
//         currentIndex--;

//         let temp = array[currentIndex];
//         array[currentIndex] = [randomIndex];
//         array[randomIndex]=temp;
//     }
//     return array;
// }
//-----------------------------------------------------------
//OBJECTS AND THIS KEYWORD

// const food1 = {
//     name:"Burger",
//     type:"Fast",
//     taste:"spicy",
//     eat:function(){
//         console.log(`you are eating ${this.name}`);
//     }
// }
// const food2 = {
//     name:"Rasmalai",
//     type:"Sweet",
//     taste:"sweet",
//     eat:function(){
//         console.log(`you are eating ${this.name}`);
//     }
// }

// console.log(food1.name);
// console.log(food1.type);
// console.log(food2.name);
// console.log(food2.type);
// food1.eat();
// food2.eat();
//-----------------------------------------------------------
//SET TIMEOUT FUNCTION
// let item = "cryptocurrency";
// let price =45.00;
// let t1 = setTimeout(_1st,3000);
// let t2 = setTimeout(_2nd,6000);
// let t3 = setTimeout(_3rd,9000);


// function _1st(item,price)
// {
//     alert(`1st message : item--> ${item} price--> ${price}`);
// }
// function _2nd()
// {
//     alert(`2nd message`);
// }
// function _3rd()
// {
//     alert(`3rd message`);
// }

// document.getElementById("time_button").onclick = function(){
//     clearTimeout(t1);
//     clearTimeout(t2);
//     clearTimeout(t3);
//     alert('thanks for clicking')
// }

//-----------------------------------------------------------
//SET INTERVAL -- used for games
// let count = 0;
// // let max = window.prompt("count to up ")
// // max =Number(max);
// let max2=3;
// const timer = setInterval(countUp,1000);

// function countUp(){
//     count++;
//     document.getElementById('hello').innerHTML = count;
//     console.log(count);
//     if(count>max2){
//         document.getElementById('hello').innerHTML = 'Time Out !';
//         clearInterval(timer);
//     }
// }
//-----------------------------------------------------------
//DATE OBJECTS 
// let date = new Date();
// let date1 = new Date(2023,0,1,2,3,4,5);
// let date2 = new Date("January 1, 2023 00:00:00")
// console.log(date);
// console.log(date1);
// console.log(date2);
// let year = date.getFullYear();
// let day_of_month = date.getDate();

// date =date.toLocaleDateString();
// const hello1 = document.getElementById('hello1');
// hello1.innerHTML = date;
// document.getElementById('hello2').innerHTML = year;
// document.getElementById('hello3').innerHTML = day_of_month;
//-----------------------------------------------------------
//PROMISES 
// const promise = new Promise((resolve,reject) =>{
//     let fileLoaded = true;
//     if(fileLoaded)
//     {
//         resolve("File Loaded");
//     }
//     else 
//     {
//         reject("Not loaded");
//     }

// })
// promise.then((value)=>{console.log(value)}).catch(error =>{console.log(error)})//if promise resolves
//-----------------------------------------------------------
//using time PROMISES
// const promise = new Promise(resolve =>{
//     setTimeout(resolve,5000);
// })
// promise.then(()=>{console.log('thanks for waitng')});

// const wait = (time)=> new Promise(resolve =>{
//     setTimeout(resolve,time);
// });

// wait(3000).then(() => {console.log("thanks for waiting bacchu")})
//-----------------------------------------------------------
//ASYNC = makes a function returns a promise
// async function loadFile(){
//     let fileLoaded = true ;
//     if(fileLoaded){
//         return "FILE LOADED";
//     }
//     else 
//     {
//         throw "FILE NOT LOADED";
//     }
// }
// loadFile().then(value => {console.log(value)}).catch(error => {console.log(error)});
//-----------------------------------------------------------

//AWAIT = makes an async function wait for promise 
//can be used within async function only
// async function loadFile(){
//     let fileLoaded = true ;
//     if(fileLoaded){
//         return "FILE LOADED";
//     }
//     else 
//     {
//         throw "FILE NOT LOADED";
//     }
// }
// async function startProcess()
// {
//     let message = await loadFile();
//     console.log(message)
// }
// startProcess();

// loadFile().then(value => {console.log(value)})
// .catch(error => {console.log(error)});
//-----------------------------------------------------------
//MODULES 
//used for importing something from one javascript file to other
// import{PI,get_circumference,get_area} from './math_util.js';
// console.log(PI);
// let c = get_circumference(4);
// console.log(c);
// let a = get_area(4);
// console.log(a)
//-----------------------------------------------------------

// CHILDREN
//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)

// let element = document.querySelector("#dessert");
// let children = Array.from(element.children);
// children.forEach(bacchu => bacchu.style.backgroundColor = "#123456")
// children.forEach(bacchu => bacchu.style.color = "#ffff")
//-----------------------------------------------------------
//ADD CHANGE HTML TAG
// .innerHTML
//.textContent (more secure)
// const nameTag = document.createElement("h1");
// nameTag.textContent = "Bro";
// document.body.append(nameTag);
// // const h2_tg = document.querySelector(".h2tag").textContent = "mamu"
// const time = setInterval(timer,2000);
// function timer(){
//     document.querySelector(".h2tag").textContent = "mamu"
//     document.querySelector(".h2tag").style.backgroundColor = "gray"
// }











