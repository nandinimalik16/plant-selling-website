//create small product cards
const createSmallCards = (data) =>  {
  //  let sm = document.querySelector('.sm-product');
    return 
  ' <div class="sm-product"> <img src="${data.image}" class="sm-product-img" alt=""><div class="sm-text"> <p class="sm-product-name">${data.name}</p> <p class="sm-des">${data.shortDes}</p> </div><div class="item-counter"><button class="counter-button decrement">-</button> <p class="item-count">${data.item}</p><button class="counter-button increment">+</button> </div><p class="sm-price" data-price="${data.sellPrice}">${data.sellPrice * data.item}</p> <button class="sm-delete-button"><img src="img/close.jpeg" alt=""></button></div>';
  
}

let totalBill=0;

const setProducts = (name) => {
    const element = document.querySelector('.${name}');
    let data = JSON.parse(localStorage.getItem(name));
    if (data == null){
        element.innerHTML='<img src="img/empty-cart.jpeg" class="empty-img" alt="">';
    }else{
        for(let i=0; i<data.length; i++){ 
          element.inerHTML+=createSmallCards(data[i]);
          if(name=='cart'){
              totalBill+=Number(data[i].sellPrice * data[i].item);
          }

    } 
  //  let billPrice=document.querySelector('.bill');
  //  billPrice.innerHtML='$${totalBill}';

  updateBill();

}

setupEvents(name);
}
 const updateBill=() =>{

 }
const setupEvents=(name) =>{
    //setup counter event
    const counterMinus=document.querySelectorAll('.${name} .decrement');
    const counterPlus=document.querySelectorAll('.${name} .increment');
    const counts=document.querySelectorAll('.${name} .item-count');
    const price=document.querySelectorAll('.${name} .sm-price');
    const deleteButton=document.querySelectorAll('.${name} .sm-delete-button');


    let product=JSON.parse(localStorage.getItem(name));
    
    counts.foreach((item , i)=> {
        let cost= Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click',()=>{
            if (item.innerHTML > 1){
                item.innerHTML--;
                totalBill-=cost;
                price[i].innerHTML = '$${item.innerHTML * cost}';
               if (name=='cart'){
                updateBill()    
               }
                product[i].item=item.innerHTML;
                localStorage.setItem(name,JSON.stringify(product));
            }
        })
        counterPlus[i].addEventListener('click',()=>{
            if (item.innerHTML < 9){
                item.innerHTML++;
                totalBill+=cost;
                price[i].innerHTML = '$${item.innerHTML * cost}';
                if (name=='cart'){
                    updateBill()    
                   }
                product[i].item=item.innerHTML;
                localStorage.setItem(name,JSON.stringify(product));
            }
        })
    })
   deleteButton.forEach((item,i) => {
    item.addEventListener('click',() => {
        product = product.filter((data,index) => index !=1);
        localStorage.setItem(name,JSON.stringify(product));
        location.reload();
    })
   })
}
setProducts('carts');
setProducts('whislist');