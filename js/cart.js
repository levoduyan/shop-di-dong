// thanh toán
function odercart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    if(cart_rows.length>0){
        var person = prompt("Quý khách vui lòng để lại số điện thoại để cửa hàng chúng tôi hỗ trợ sớm nhất", "");
        if (person == null || person == "") {
            alert("Quý khách chưa nhập số điện thoại liên hệ.");
        } else {
            alert("Chúng tôi sẽ liên hệ quý khách theo số điện thoại " + person + " trong thời gian sớm nhất !");
            
            while (cartItems.hasChildNodes()) {
                cartItems.removeChild(cartItems.firstChild)
            }
            updatecart()
        }
    }else{
        alert("Giỏ hàng rỗng, không thể thanh toán. Vui lòng kiểm tra lại!");
    }

}

// xóa cart
function removecart(event) {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
}

// thay đổi số lượng
function changecart(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatecart()
}

// Thêm vào giỏ
function addcart(event) {
    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("card-img")[0].src
    var title = product.getElementsByClassName("card-title")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    document.getElementById("myModal").style.display = "block";
    updatecart()
}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${img}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removecart)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changecart)
}

// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("cart-price ")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText)
        var quantity = quantity_item.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
}

export {
    odercart,
    removecart,
    changecart,
    addcart,
    addItemToCart,
    updatecart
}