let dress=document.getElementById("dress");
let count=document.querySelector(".count");
let bag=document.querySelector(".bagb");
let leads;
let c;
// localStorage.clear();
if(JSON.parse(localStorage.getItem("cart"))){
    leads=JSON.parse(localStorage.getItem("cart"));
    console.log(leads);
}
else{
    leads=[];
    console.log(leads);

}
if(JSON.parse(localStorage.getItem("c"))){
    c=JSON.parse(localStorage.getItem("c"));
    console.log(leads);
}
else{
    c=0;
    console.log(leads);

}
let f=1;
let i;
let j=0;
// localStorage.clear();
let r=localStorage.getItem("c");
    console.log(r);
    count.textContent=r;
bag.addEventListener("click",()=>{
    console.log("button")
    let req=JSON.parse(localStorage.getItem("cart"));
    console.log(req);
})
function add(x,y){
    localStorage.setItem("cart",JSON.stringify(leads));
    let req1=JSON.parse(localStorage.getItem("cart"));
    if(req1.length==0){
        c=1;
        localStorage.setItem("c",JSON.stringify(c));
    let r=localStorage.getItem("c");
    console.log(r);
    count.textContent=r;
    let pros=JSON.parse(localStorage.getItem("pro"));
    
    
    leads.push({x,y});
     
    localStorage.setItem("cart",JSON.stringify(leads));
    let req=JSON.parse(localStorage.getItem("cart"));
    console.log(req);
    }
    else{
        c++;
        localStorage.setItem("c",JSON.stringify(c));
    let r=localStorage.getItem("c");
    console.log(r);
    count.textContent=r;
    let pros=JSON.parse(localStorage.getItem("pro"));
    
    
    leads.push({x,y});
     
    localStorage.setItem("cart",JSON.stringify(leads));
    let req=JSON.parse(localStorage.getItem("cart"));
    console.log(req);
    }
    // if()
    
    // return;
}
console.log("connected");
fetch('./p1.json')
            .then((data)=>{
                return data.json();
            })
            
.then(function(products){
let h="";
// let products=JSON.parse(product);
console.log(products)
localStorage.setItem("pro",JSON.stringify(products));
let t=products.length;

    for(i=0;i<t;i++){
        // console.log(product.images.length)
            h+=`<h1>${products[i].name}</h1>
            `;
            h+=`<div class="container">`
            for(let j=0;j<products[i].images.length;j++){
                
        h+=`
        
            <div class="card" >
            <a href="/p?id=${i}&i=${j}">
                <img  src='${products[i].images[j].url}'  alt=""  class="img1 >  
                 </a>             
                <p class="price">price:${products[i].price}</p>                
                <button id="add" class="${i}hi"onclick="add(${i},${j})" >add card</button>    
            </div>         
       
            `;
            }
            h+=`</div>`
            dress.innerHTML=(h);   
            // j++;
        }
        // let add=document.getElementById("add");
        
})