function addToCart(name, price) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const index = cart.findIndex(item => item.name === name);

      if (index !== -1) {
        cart[index].count += 1;
      } else {
        cart.push({ name, price, count: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    }

    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
      document.getElementById('cart-count').textContent = `${totalCount}`;
    }

    /* โหลดจำนวนตะกร้าเมื่อเปิดหน้า */
    window.onload = updateCartCount;