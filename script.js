// I don't know how to use in try catch

// input,button,results text align
var div = document.createElement("div");
div.style.textAlign="center";

// inputbox create dynamically
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","brandid");
input.setAttribute("style","margin:0px 6px 20px 0px");
// button create dynamically
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
//product- brand name price link description 
var brand1 = document.createElement("div");
brand1.setAttribute("id","brand");

var name1 = document.createElement("div");
name1.setAttribute("id","name1 ");

var price  = document.createElement("div");
price .setAttribute("id","price ");

var  product_link = document.createElement("div");
product_link.setAttribute("id"," product_link");

var description  = document.createElement("div");
description .setAttribute("id","description ");

div.append(input,button,brand1,name1,price,product_link,description);

document.body.append(div);


async function foo() {
    var brand = document.getElementById("brandid").value;
    console.log(brand);
    var url = `https://makeup-api.herokuapp.com/api/v1/products/${brand}.json`;
    var api1 = await fetch(url);
    var api  = await api1.json();
    console.log(api);
    //  bootstrap card code
    brand1.innerHTML=`
    <div style=textAlign=center;background-color:linen;color:blue; class="card mb-3" style="max-width: 1000px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img  width=340; hight=568; src=${api.image_link} alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 style="color:blue"; class="card-title">Product Id: ${api.id}</h3>
        <h5 class="card-title">Brand: ${api.brand}</h5>
        <h5 class="card-title">Product Name: ${api.name}</h5>
        <h5 class="card-title">Product Price: $${api.price}</h5>
        <a href="${api.product_link}" target="_blank" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Product Link</a>
        
        <h5 style="margin-top:10px"; class="card-title">Product description:</h5>
        <h6 style=color:black;class="card-title">${api.description}</h6>
        

       

   
        
      </div>
    </div>
  </div>
  </div>
    `}
    

    
   































