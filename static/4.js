let buyg=document.getElementById("buyg");
let tot=document.getElementById("total");
let c=localStorage.getItem("c");
let h="";
console.log("connected 4js");
let products=JSON.parse(localStorage.getItem("pro"));
let cart1=[];
let cart=JSON.parse(localStorage.getItem("cart"));
console.log(products);
console.log(cart);
let cartj=[];

for(j=0;j<cart.length;j++){
    cartj.push(cart[j]);
}
console.log("cart j");
console.log(cartj);
// for()
// let t=products.length;
let map={};
for(k=0;k<cartj.length;k++){
    let l=1;
    if(cartj[k].x==-1)continue;
    for(j=k+1;j<cartj.length;j++){
        if(cartj[k].x===cartj[j].x&&cartj[k].y===cartj[j].y){
            l++;
            cartj[j].x=-1;
            cartj[j].y=-1;
            // cart.slice(j);
        }
        // map[i]=1;
    }
// map[i]=1;
// map[i]=l;
cart1.push({k,l});
}
console.log(map);

let total=0;
for(i=0;i<cart1.length;i++){

    // console.log(product.images.length)
  
        h+=`<h1>${products[cart[cart1[i].k].x].name}</h1>
        `;
        h+=`<div class="contain">`
        
            
    h+=`
        <div class="l" >
            <img  src='${products[cart[cart1[i].k].x].images[cart[cart1[i].k].y].url}'  alt=""  class="imgl" >               
            <p class="price">price:${products[cart[cart1[i].k].x].price}</p>  
            <p>quantity:${cart1[i].l}</p>

            
        </div>         
        `;
        let price;
        let cost =products[cart[cart1[i].k].x].price;
        
        console.log(cart1[i].l);
        console.log(products[cart[cart1[i].k].x].price);
        total+=cart1[i].l*products[cart[cart1[i].k].x].price;
        console.log(cart1[i].l*products[cart[cart1[i].k].x].price);
        h+=`</div>`

        // console.log(h);
           
        // j++;
    }
    buyg.innerHTML=h;
    tot.textContent=`total:${total}`;

    // // console.log();
    // localStorage.setItem("cart",JSON.stringify(cartj));
    console.log("cart");
    console.log(cart);
    // localStorage.setItem("c",c);
