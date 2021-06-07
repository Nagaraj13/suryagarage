//navication

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const introheader =document.querySelector(".image-content");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
   
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let homebtn=document.querySelector(".Home");

homebtn.addEventListener('click',()=>{

window.location="home.html";

});


//below servic

let servicebtn=document.querySelector(".Service");

servicebtn.addEventListener('click',()=>{
    window.location="service.html";

});

//below product
 let productbtn=document.querySelector(".producat");

 productbtn.addEventListener('click',()=>{

window.location="products.html";

 });


 let contactsbtn=document.querySelector(".contact");

 contactsbtn.addEventListener('click',()=>{

window.location="contact.html";

 });







//table script
var pn={
    name:"sofa",
    price:"1234",

    
}
document.getElementById("pname").innerHTML = pn.name ;
document.getElementById("pprice").innerHTML = pn.price ;


 

 //add item
 
 const addbtn=document.querySelector(".btn-add");
 
 addbtn.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname").innerHTML;
var price=document.getElementById("price").innerHTML;
var template=`

      
<tr>
            <td >${name}</td>
            <td >${price}</td>
            
            
          </tr>

`
table.innerHTML+=template;





 });

 //add item 1
 const addbtn1=document.querySelector(".btn-add1");
 
 addbtn1.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname1").innerHTML;
var price=document.getElementById("price1").innerHTML;
var template=`

      
<tr>
            <td >${name}</td>
            <td >${price}</td>
            
            
          </tr>

`
table.innerHTML+=template;





 });
 //add item 2
 const addbtn2=document.querySelector(".btn-add2");
 
 addbtn2.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname2").innerHTML;
var price=document.getElementById("price2").innerHTML;
var template=`

      
<tr>
            <td >${name}</td>
            <td >${price}</td>
            
            
          </tr>

`
table.innerHTML+=template;





 });
 //add item 3
 const addbtn3=document.querySelector(".btn-add3");
 
 addbtn3.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname3").innerHTML;
var price=document.getElementById("price3").innerHTML;
var template=`

      
<tr>
            <td >${name}</td>
            <td >${price}</td>
            
            
          </tr>

`
table.innerHTML+=template;





 });

//add item 4
const addbtn4=document.querySelector(".btn-add4");
 
addbtn4.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname4").innerHTML;
var price=document.getElementById("price4").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});
//add item 5
const addbtn5=document.querySelector(".btn-add5");
 
addbtn5.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname5").innerHTML;
var price=document.getElementById("price5").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});
//add item 6
const addbtn6=document.querySelector(".btn-add6");
 
addbtn6.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname6").innerHTML;
var price=document.getElementById("price6").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});
//add item 7
const addbtn7=document.querySelector(".btn-add7");
 
addbtn7.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname7").innerHTML;
var price=document.getElementById("price7").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});


//add item 2
const addbtn8=document.querySelector(".btn-add8");
 
addbtn8.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname8").innerHTML;
var price=document.getElementById("price8").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});
//add item 9
const addbtn9=document.querySelector(".btn-add9");
 
addbtn9.addEventListener("click",()=>{
let table=document.querySelector("table");
var name=document.getElementById("productname9").innerHTML;
var price=document.getElementById("price9").innerHTML;
var template=`

     
<tr>
           <td >${name}</td>
           <td >${price}</td>
           
           
         </tr>

`
table.innerHTML+=template;





});





//
//add item 2
var  buybtn=document.querySelector(".btn-buy");
 
buybtn.addEventListener("click",()=>{

    alert("your purchase successfully");
    window.location="products.html";


});
