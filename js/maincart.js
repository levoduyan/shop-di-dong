import {odercart, removecart, changecart, addcart} from './cart.js'

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("cart");
    var close = document.getElementsByClassName("close")[0];
    //hiện giỏ hàng
    btn.onclick = function () {
        modal.style.display = "block";
    }
    //thoát giỏ hàng
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //Xóa Cart
    var remove_cart = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < remove_cart.length; i++) {
        var button = remove_cart[i]
        button.addEventListener("click", removecart)
    }
    //tùy chỉnh số lượng
    var quantity_input = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantity_input.length; i++) {
        var input = quantity_input[i];
        input.addEventListener("change", changecart)
    }
    //thêm cart
    var add_cart = document.getElementsByClassName("btn-cart");
    for (var i = 0; i < add_cart.length; i++) {
        var add = add_cart[i];
        add.addEventListener("click", addcart)
    }
    //thanh toán
    document.getElementsByClassName("order")[0].addEventListener("click", odercart)
    
}