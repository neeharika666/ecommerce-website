let c=localStorage.getItem("c");
let count=document.querySelector(".count");
count.textContent=c;
console.log(c);
let dress=document.getElementById("dress");

const keys=window.location.search;
const url=new URLSearchParams(keys);
let i=url.get("id");
let j=url.get("i");
console.log(i,j);



let leads=[];
let products=JSON.parse(localStorage.getItem("pro"));
if(JSON.parse(localStorage.getItem("cart"))){
    leads=JSON.parse(localStorage.getItem("cart"));
    console.log(leads);
}
else{
    leads=[];
    console.log(leads);

}
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
let h=`

<div class="card" >
                <img  src='${products[i].images[j].url}'  alt=""  class="img1 >               
                <p class="price">price:${products[i].price}</p>                
                <button id="add" class="${i}hi"onclick="add(${i},${j})" >add card</button>    
               
            </div>  
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tenetur impedit sed pariatur necessitatibus. Dolorum, architecto ea laudantium facere accusamus quidem hic vero impedit corrupti, explicabo, obcaecati libero. Molestiae, temporibus.</p>
             `
dress.innerHTML=h;