var list = document.getElementById("cart-list");

function AddtoCart(event) {
  var priceElement = event.currentTarget.querySelector(".price");
  var price = priceElement.textContent;

  var li = document.createElement("li");
  var text = document.createTextNode(price);
  li.appendChild(text);

  list.appendChild(li);

  var delbtn = document.createElement("button");
  var deltext = document.createTextNode("delete");
  delbtn.setAttribute("class", "parents");
  delbtn.setAttribute("onclick", "btnDelete(this)");
  delbtn.appendChild(deltext);
  li.appendChild(delbtn);
}

function btnDelete(e) {
  e.parentNode.remove();
}

var products = document.getElementsByClassName("product");

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener("click", AddtoCart);
}
