document.addEventListener('DOMContentLoaded', () => {
    const menuItems_starter = [
        {row:"row_1", title: "Nacho & Cheese ", amount: "20pic", price: 100, type: "Starter", imgUrl: "./images/menu-images/nacho-cheese-sauce.jpg" },
        {row:"row_1", title: "Samosa ", amount: "2pic", price: 50, type: "Starter", imgUrl: "./images/menu-images/samosa.jpg" },
        {row:"row_1", title: "Samosa Chat", amount: "2pic", price: 90, type: "Starter", imgUrl: "./images/menu-images/samosa-chaat.jpg" },
        {row:"row_1", title: "Papdi Chat ", amount: "6pic", price: 90, type: "Starter", imgUrl: "./images/menu-images/papdi-chaat.jpg" },
        {row:"row_1", title: "Sev Puri", amount: "6pic", price: 90, type: "Starter", imgUrl: "./images/menu-images/sev-puri.jpg" },
        {row:"row_1", title: "Dahi Vada", amount: "2pic", price: 100, type: "Starter", imgUrl: "./images/menu-images/dahi-vada.jpg" },
        {row:"row_1", title: "Corn Chaat", amount: "200g", price: 50, type: "Starter", imgUrl: "./images/menu-images/corn-chaat.jpg" },
        {row:"row_1", title: "Paneer Tikka ", amount: "5pic", price: 100, type: "Starter", imgUrl: "./images/menu-images/paneer-tikka.jpg" },
    ]
    const menuItems_veg = [
        {row:"row_2", title: "Palak Paneer ", amount: "300g", price: 250, type: "Veg", imgUrl: "./images/menu-images/palak-paneer.png" },
        {row:"row_2", title: "Mix veg", amount: "300g", price: 180, type: "Veg", imgUrl: "./images/menu-images/mix-veg.png" },
        {row:"row_2", title: "Veg Kofta", amount: "300g", price: 280, type: "Veg", imgUrl: "./images/menu-images/veg-kofta.png" },
        {row:"row_2", title: "Mattae Paneer", amount: "300g", price: 280, type: "Veg", imgUrl: "./images/menu-images/mattar-paneer.png" },
        {row:"row_2", title: "Veg Pulao", amount: "1 pl", price: 200, type: "Veg", imgUrl: "./images/menu-images/veg-pulao.png" },
        {row:"row_2", title: "Pav Bhaji ", amount: "2pav", price: 180, type: "Veg", imgUrl: "./images/menu-images/pav-bhaji.png" },
        {row:"row_2", title: "Dal Fry ", amount: "200 g", price: 150, type: "Veg", imgUrl: "./images/menu-images/dal-fry.png" },
        {row:"row_2", title: "Jira Rice", amount: "1pl", price: 100, type: "Veg", imgUrl: "./images/menu-images/jira-rice.png" },
    ]

    const menuItems_non_veg = [
        {row:"row_3", title: "Tanduri Chicken ", amount: "10pic", price: 200, type: "Non-Veg", imgUrl: "./images/menu-images/tanduri-chicken.png" },
        {row:"row_3", title: "Butter Chicken", amount: "350g", price: 300, type: "Non-Veg", imgUrl: "./images/menu-images/butter-chicken.png" },
        {row:"row_3", title: "Chicken T Masala", amount: " 350g", price: 290, type: "Non-Veg", imgUrl: "./images/menu-images/chicken-tikka-masala.png" },
        {row:"row_3", title: "Hyderabadi Biryani", amount: "1pl", price: 200, type: "Non-Veg", imgUrl: "./images/menu-images/hyderabadi-biryani.png" },
        {row:"row_3", title: "Chicken 65 ", amount: "10pic", price: 280, type: "Non-Veg", imgUrl: "./images/menu-images/chicken-65.png" },
        {row:"row_3", title: "Chicken BBQ ", amount: "10pic", price: 350, type: "Non-Veg", imgUrl: "./images/menu-images/chicken-bbq.png" },
        {row:"row_3", title: "Seekh Kababab ", amount: "5pic", price: 200, type: "Non-Veg", imgUrl: "./images/menu-images/seekh-kababaab.png" },
        {row:"row_3", title: "Chicken Lolipop ", amount: "4pic", price: 300, type: "Non-Veg", imgUrl: "./images/menu-images/chicken-lolipop.png" },
    ];
    const menuItems_beverages = [
        {row:"row_4", title: "Coke ", amount: "200ml", price: 150, type: "beverages", imgUrl: "./images/menu-images/coke.png" },
        {row:"row_4", title: "Pepsi ", amount: "200ml", price: 150, type: "beverages", imgUrl: "./images/menu-images/pepsi.png" },
        {row:"row_4", title: "Merinda ", amount: "200ml", price: 150, type: "beverages", imgUrl: "./images/menu-images/merinda.png" },
        {row:"row_4", title: "Lassi ", amount: "200ml", price: 150, type: "beverages", imgUrl: "./images/menu-images/lassi.png" },
        {row:"row_4", title: "Venilla Ice Cream ", amount: "2schop", price: 100, type: "beverages", imgUrl: "./images/menu-images/venilla-ice-cream.png" },
        {row:"row_4", title: "Strawberry Ice Cream ", amount: "2schop", price: 100, type: "beverages", imgUrl: "./images/menu-images/strawberry-ice-cream.png" },
        {row:"row_4", title: "Gulab Jamun  ", amount: "2pic", price: 15, type: "beverages", imgUrl: "./images/menu-images/gulab-jamun.png" },
        {row:"row_4", title: "Ras Malai ", amount: "2pic", price: 100, type: "beverages", imgUrl: "./images/menu-images/ras-malai.png" },
    ];

    function createMenuItemCard(item) {
        const card = document.createElement('div');
        card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "py-3");

        card.innerHTML = `
          <div class="menu_item_card rounded-top-2 card rounded-bottom-1 overflow-hidden ">
              <div class="menu_item_card_img_holder card-img pb-1">
                  <img src="${item.imgUrl}" alt="${item.title}" class="img-fluid menu_item_card_img mx-auto d-block flex-wrap" />
              </div>
              <div class="menu_item_card_body px-3">
            <div class="d-flex justify-content-around align-items-center py-2 border-bottom">
            <span class="menu_item_card_title fs-4 d-block mx-auto text-center ">${item.title}</span>
            <spam class="  d-block mx-auto text-center">${item.amount}</spam>
            </div>
                  <div class="menu_Item_card_btn_holder w-100 px-1 px-sm-2 px-md-3">
                      <button class="menu_item_add_btn my-2 mx-auto d-block px-4 py-2"
                          onclick="addToCart('${item.title}', ${item.price}, '${item.type}' ,'${item.amount}')">
                          Add To Cart
                      </button>
                  </div>
              </div>
          </div>
          
      `;
        return card;
    }


    const menuContainer_row1 = document.getElementById("row_1");
    menuItems_starter.forEach(item => {
        const card = createMenuItemCard(item);
        menuContainer_row1.appendChild(card);
    });
    const menuContainer_row2 = document.getElementById("row_2");
    menuItems_veg.forEach(item => {
        const card = createMenuItemCard(item);
        menuContainer_row2.appendChild(card);
    });

    const menuContainer_row3 = document.getElementById("row_3");
    menuItems_non_veg.forEach(item => {
        const card = createMenuItemCard(item);
        menuContainer_row3.appendChild(card);
    });

    const menuContainer_row4 = document.getElementById("row_4");
    menuItems_beverages.forEach(item => {
        const card = createMenuItemCard(item);
        menuContainer_row4.appendChild(card);
    });

   
    function createSidebarItem(sideitem) {
        const sideBarItem = document.createElement('li');
        sideBarItem.classList.add("menu_side_bar_link", "mx-auto", "py-2", "my-1" ,"w-50" );
        sideBarItem.innerHTML = `<a class="px-3" href="#${sideitem.row}">${sideitem.title}</a>`;
        return sideBarItem;
    }
    
    const menu_side_bar_starter = document.getElementById("menu_side_bar_starter");
    menuItems_starter.forEach(sideitem => {
        const item = createSidebarItem(sideitem);
        menu_side_bar_starter.appendChild(item);
    });
    const menu_side_bar_veg = document.getElementById("menu_side_bar_veg");
    menuItems_veg.forEach(sideitem => {
        const item = createSidebarItem(sideitem);
        menu_side_bar_veg.appendChild(item);
    });
    const menu_side_bar_non_veg = document.getElementById("menu_side_bar_non-veg");
    menuItems_non_veg.forEach(sideitem => {
        const item = createSidebarItem(sideitem);
        menu_side_bar_non_veg.appendChild(item);
    });

    const menu_side_bar_dessert_beverages = document.getElementById("dessert-beverages");
    menuItems_beverages.forEach(sideitem => {
        const item = createSidebarItem(sideitem);
        menu_side_bar_dessert_beverages.appendChild(item);
    });
});

function addToCart(itemName, itemPrice, itemType, itemAmount) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name: itemName, amount: itemAmount, price: itemPrice, type: itemType });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
}