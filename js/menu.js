document.addEventListener('DOMContentLoaded', () => {
  const menuItems = [
      { title: "Burger", price: 10, type: "Starter" },
      { title: "Pizza", price: 15, type: "Starter" }
  ];

  function createMenuItemCard(item) {
      const card = document.createElement('div');
      card.classList.add("col-12", "col-sm-4", "col-md-3", "py-3");

      card.innerHTML = `
          <div class="menu_item_card rounded-top-2 rounded-bottom-1 overflow-hidden">
              <div class="menu_item_card_img_holder pb-1">
                  <img src="./menu-images/pexels-aditya-mara-17223837.jpg" alt="" class="img-fluid menu_item_card_img" />
              </div>
              <div class="menu_item_card_body px-3">
                  <span class="menu_item_card_title fs-4 d-block mx-auto text-center border-bottom">${item.title}</span>
                  <div class="menu_Item_card_btn_holder w-100 px-1 px-sm-2 px-md-3">
                      <button class="menu_item_add_btn my-2 mx-auto d-block px-4 py-2"
                          onclick="addToCart('${item.title}', ${item.price}, '${item.type}')">
                          Add To Cart
                      </button>
                  </div>
              </div>
          </div>
      `;
      return card;
  }

  const menuSections = ['row_1', 'row_2', 'row_3', 'row_4'];

  menuSections.forEach(sectionId => {
      const menuContainer = document.getElementById(sectionId);
      menuItems.forEach(item => {
          const card = createMenuItemCard(item);
          menuContainer.appendChild(card);
      });
  });
});

function addToCart(itemName, itemPrice, itemType) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.push({ name: itemName, price: itemPrice, type: itemType });
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert('Item added to cart!');
}