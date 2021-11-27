var likes = document.getElementsByClassName("like");

for (let i = 0; i< likes.length;i++){
    let like=likes[i];
    like.addEventListener("click", function () {
        if (like.style.color === "red"){
            like.style.color = "black";
        }else{
            like.style.color = "red";
        }
    });
}

var pluss = document.getElementsByClassName("plus-btn");
console.log(pluss);
for (let i = 0; i < pluss.length; i++) {
    let plus = pluss[i];
    plus.addEventListener("click",function () {
        plus.previousElementSibling.value++;
        sommetotal();
    });
}

var minuss = document.getElementsByClassName("minus-btn");
console.log(minuss);
for (let i = 0; i < minuss.length; i++) {
    let minus = minuss[i];
    minus.addEventListener("click",function () {
        if (minus.nextElementSibling.value > 1) {
        minus.nextElementSibling.value--;
        sommetotal();
         }
    });
}

var deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
    let del = deletes[i];
    del.addEventListener("click",function  () {
        del.parentElement.remove();
        sommetotal();
    });
}

var items = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");

function sommetotal() {
var s = 0;
    for (let i = 0; i < items.length; i++){
     s = 
      s +
      items[i].querySelector(".Quant").value*
       items[i].querySelector(".price").innerText;
 }
 final.value = s;
 }
