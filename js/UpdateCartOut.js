function renderCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItems = document.getElementById('cart-items');
      const totalPriceEl = document.getElementById('total-price');
      let total = 0;

      cartItems.innerHTML = '';

      cart.forEach(item => {
        const subtotal = item.price * item.count;
        total += subtotal;

        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} บาท x ${item.count} = ${subtotal} บาท`;
        cartItems.appendChild(li);
      });

      totalPriceEl.textContent = total;
    }

    function clearCart() {
      localStorage.removeItem('cart');
      renderCart();
    }

    window.onload = renderCart;