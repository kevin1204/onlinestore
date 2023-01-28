"use strict";

class StoreItem {
  constructor(
    id,
    name,
    price,
    qh,
    max_per_c,
    categ,
    costShip,
    reviews,
    descr,
    imageUrl
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qh = qh;
    this.max_per_c = max_per_c;
    this.categ = categ;
    this.costShip = costShip;
    this.reviews = reviews;
    this.descr = descr;
    this.imageUrl = imageUrl;
  }
}

class CartItem {
  constructor(id, price, quantity, shipping) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.shipping = shipping;
  }
}

class ReviewItem {
  constructor(review, rating) {
    this.review = review;
    this.rating = rating;
  }
}

var store_items = [];
var cart_items = [];

// dataset

window.onload = () => {
  // displaying datetime
  document.getElementById("datetime").innerHTML = new Date().toLocaleString();

  // adding data

  store_items.push(
    new StoreItem(
      "1",
      "Josmo",
      45.89,
      84,
      3,
      "Kid's Shoes",
      3,
      [
        {
          text: "I love these shoes for helping with walking. However, I wish they had better grip.",
          rating: 5,
        },
      ],
      "JOSMO Unisex-Child Walking Shoes First Walker. Special Size: Toddler (1-4 Years)",
      "https://i5.walmartimages.com/asr/13ac3d61-003c-4a30-94db-7d4e7e94fd3b_1.157f2cdc2551cda33f1191df19dd94ff.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "2",
      "Zoot Tt Trainer 2.0   Round Toe Synthetic  Sneakers",
      99.99,
      45,
      10,
      "Women's Shoes",
      8.5,
      [],
      "",
      "https://i5.walmartimages.com/asr/e04c07b2-5222-4880-ab25-ff5b68d189ab_1.2a9bd3ca23665ab2c7f7fae0196c2004.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "3",
      "Wild Pair Colfax Women  Peep-toe Synthetic Brown Ankle Boot",
      89.99,
      45,
      10,
      "Women's Shoes",
      5,
      [],
      "Boot for womens",
      "https://i5.walmartimages.com/asr/8b2c73f5-939f-4780-9ab2-5eb9cb6ed006_1.1e775832bc34f9db617a15065adb0708.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "4",
      "Naturalizer Danya Women N/S Open Toe Synthetic Silver Sandals",
      85.99,
      22,
      4,
      "Women's Shoes",
      6.33,
      [],
      "UWomens  M Regular",
      "https://i5.walmartimages.com/asr/0e781ba8-a9cf-4a18-8fc1-7927386c1f91_1.269733737384f23971b21b7753f6ccf9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "5",
      "MUK LUKS Womens Jane Suede Moccasin",
      45.85,
      38,
      2,
      "Women's Shoes",
      6,
      ["Mocassin"],
      [],
      "https://i5.walmartimages.com/asr/6b9966ed-99e5-46ec-9a67-319e7e5a88dd_1.1b1c4da31cfb9a44485c8a55a0797f51.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "6",
      "MUK LUKS Womens Dawn Suede Scuff Slipper",
      32.75,
      15,
      10,
      "Women's Shoes",
      5,
      [],
      "Confortable shoes.",
      "https://i5.walmartimages.com/asr/8e75e52f-7b33-47a0-9243-fe45234d71d8_1.9142dac983b91ebfec20c231125d03e2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "7",
      "Skechers Women's Sport",
      60.38,
      30,
      6,
      "Women's Shoes",
      6.55,
      [],
      "A classic look gets updated with comfort in the SKECHERS D'Lites - Biggest Fan shoe. Smooth trubuck leather and fabric upper in a lace up sporty casual sneaker with stitching and overlay accents. Air Cooled Memory Foam insole.",
      "https://i5.walmartimages.com/asr/600d0fcb-1c56-4dcf-9aee-e4b42a1cfaf1.62e69319f5cef00149a23ecae5b2d3e7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    )
  );

  store_items.push(
    new StoreItem(
      "8",
      "Nike Air Force 1 Low",
      132.99,
      96,
      4,
      "Men's Shoes",
      7.5,
      [],
      "Boys' Grade School",
      "https://images.footlocker.com/is/image/EBFL2/D2920111_a1?wid=500&hei=500&fmt=png-alpha"
    )
  );

  store_items.push(
    new StoreItem(
      "9",
      "Cloudnova Sneaker",
      208.55,
      120,
      10,
      "Men's Shoes",
      15,
      [],
      "Runner-tech comfort meets street-ready attitude in a sneaker that sets layers of targeted mesh atop a fusion of performance cushioning technologies.",
      "https://n.nordstrommedia.com/id/sr3/c5d15246-49e3-4208-86cf-9cb264c45d9e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
    )
  );

  store_items.push(
    new StoreItem(
      "10",
      "x Converse Chuck Taylor® Hidden Heart High Top Sneaker",
      210.99,
      65,
      5,
      "Men's Shoes",
      12,
      [],
      "Cool vintage style elevates a street-ready sneaker stamped with a peekaboo heart.",
      "https://n.nordstrommedia.com/id/sr3/23558e67-dbd2-4e65-903a-2ecd3ff48fb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
    )
  );

  store_items.push(
    new StoreItem(
      "11",
      "Jordan Retro 12",
      121.99,
      44,
      4,
      "Kid's Shoes",
      12,
      [],
      "Crafted with the finest materials and technology, the shoe is composed of genuine leather for high-quality durability.",
      "https://images.footlocker.com/is/image/EBFL2/53265015?wid=392&hei=392&fmt=png-alpha"
    )
  );

  store_items.push(
    new StoreItem(
      "12",
      "CROWN VINTAGE HOLLISS BOOT",
      79.99,
      33,
      2,
      "Women's Shoes",
      9,
      [],
      "The Holliss from Crown Vintage easily takes you from early morning farmer's markets to after-work drinks with friends. No matter what's on the schedule for the day, these boho-inspired booties are a top pick this season!",
      "https://images.dsw.com/is/image/DSWShoes/532257_241_ss_01?impolicy=qlt-medium-high&imwidth=640&imdensity=1"
    )
  );

  store_items.push(
    new StoreItem(
      "13",
      "adidas Forum Low Grinch",
      160.33,
      76,
      4,
      "Kid's Shoes",
      15,
      [],
      "Featuring a leather/textile upper, these sneakers offer an upscale yet comfortable feel to your grade-schoolers’ strides. Prepped to help your kids tackle big tasks throughout the day, the adidas Forum Low Grinch makes them do it all in style.",
      "https://images.footlocker.com/is/image/EBFL2/HP6772GS_a1?wid=500&hei=500&fmt=png-alpha"
    )
  );

  store_items.push(
    new StoreItem(
      "14",
      "New Balance 550",
      135.99,
      22,
      2,
      "Kid's Shoes",
      8,
      [],
      "Recreating a timeless classic for the new generation of ballers, the New Balance 550 is simple, elegant, and clean. Paying tribute to the ‘90s pro ballers and the streetwear that defined a hoops generation, these sneakers are made for kids who know authenticity.",
      "https://images.footlocker.com/is/image/EBFL2/GSB550PB_a1?wid=500&hei=500&fmt=png-alpha"
    )
  );

  store_items.push(
    new StoreItem(
      "15",
      "Jordan AJ 1 Mid SE",
      135,
      72,
      10,
      "Kid's Shoes",
      6.5,
      [],
      "The Jordan AJ 1 Mid SE is a kids’ basketball shoe with a mid-top design inspired by the original AJ1 from 1985. It has a synthetic leather upper that’s durable and looks great, along with a lace-up closure for a traditional, sporty look and supportive feel.",
      "https://images.footlocker.com/is/image/EBFL2/C7248600_a1?wid=500&hei=500&fmt=png-alpha"
    )
  );

  displayStoreItem();
  displayCartItems();
};

// functions

function displayStoreItem() {
  let tableDiv = document.getElementById("items_table");

  tableDiv.innerHTML = "";

  let table = document.createElement("table");
  table.id = "items";

  let tr = document.createElement("tr");

  let th = document.createElement("th");
  th.innerHTML = "ID";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Product Name";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Price";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Quantity On Hand";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Max";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Category";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Image";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Add To Cart";
  tr.appendChild(th);

  table.appendChild(tr);

  const categ = document.getElementById("categories").value;

  store_items.forEach((item) => {
    if (
      categ == "all" ||
      (categ == "men" && item.categ == "Men's Shoes") ||
      (categ == "women" && item.categ == "Women's Shoes") ||
      (categ == "kids" && item.categ == "Kid's Shoes")
    ) {
      let row = table.insertRow();

      let id = row.insertCell(0);
      id.innerHTML = item.id;

      let name = row.insertCell(1);

      const atag = document.createElement("a");

      atag.innerHTML = item.name;
      atag.href = "";

      atag.onclick = function (e) {
        e.preventDefault();
        let message = getDetails(item);
        alert(message);
      };

      name.appendChild(atag);

      let price = row.insertCell(2);
      price.innerHTML = convertPrice(item.price);

      let qh = row.insertCell(3);
      qh.innerHTML = item.qh;

      let max = row.insertCell(4);
      max.innerHTML = item.max_per_c;

      let categ = row.insertCell(5);
      categ.innerHTML = item.categ;

      let img = row.insertCell(6);
      img.innerHTML = "<img src=" + item.imageUrl + 'width="80" height="80" />';

      // add to cart code

      const addtocartCell = row.insertCell(7);
      const cart_div = document.createElement("div");
      cart_div.id = "add_to_cart";

      const cart_input = document.createElement("input");
      cart_input.type = "number";
      cart_input.id = item.id;
      cart_input.className = "items_cart_counter";
      cart_input.value = 0;
      cart_input.min = 0;

      cart_div.appendChild(cart_input);

      const cart_btn = document.createElement("button");
      cart_btn.id = `btn_${item.id}`;
      cart_btn.innerHTML = "Add To Cart";
      cart_btn.onclick = function () {
        if (parseFloat(cart_input.value) > 0) {
          add_remove_item(item, parseFloat(cart_input.value));
        }
      };

      cart_div.appendChild(cart_btn);

      addtocartCell.appendChild(cart_div);
    }
  }); // end foreach

  tableDiv.appendChild(table);
}

//building the displayCartItems function
function displayCartItems() {
  const container = document.getElementById("cart_items");

  let itemsSubtotal = 0.0;
  let shippingCost = 0.0;

  if (cart_items.length == 0) {
    container.innerHTML = "No Items In Cart. Add Items to Cart";
  } else {
    container.innerHTML = "";
    let table = document.createElement("table");

    let tr = document.createElement("tr");

    let th = document.createElement("th");
    th.innerHTML = "ID";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Price";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Quantity";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Subtotal";
    tr.appendChild(th);

    table.appendChild(tr);

    cart_items.forEach((item) => {
      let row = table.insertRow();

      let id = row.insertCell(0);
      id.innerHTML = item.id;

      let price = row.insertCell(1);
      price.innerHTML = item.price;

      let qte = row.insertCell(2);
      qte.innerHTML = item.quantity;

      let subtotal = row.insertCell(3);
      subtotal.innerHTML = convertPrice(item.price * item.quantity);

      itemsSubtotal += item.price * item.quantity;
      shippingCost += item.shipping * item.quantity;
    });

    container.appendChild(table);
  }

  document.getElementById("items_subtotal").innerHTML =
    convertPrice(itemsSubtotal);
  document.getElementById("shipping").innerHTML = convertPrice(shippingCost);

  const subtotal = itemsSubtotal + shippingCost;
  const estimated_tax = (subtotal * 13) / 100;

  const total_order = subtotal - estimated_tax;

  document.getElementById("subtotal").innerHTML = convertPrice(subtotal);
  document.getElementById("tax").innerHTML = convertPrice(estimated_tax);
  document.getElementById("order_total").innerHTML = convertPrice(total_order);
}

function add_remove_item(item, qte) {
  // function to add / remove the item to the cart

  // check if this item exist in the cart
  const found_cartItem = cart_items.find((cartItem) => cartItem.id == item.id);

  if (found_cartItem) {
    // check if this is add or remove to cart
    if (qte > found_cartItem.quantity) {
      // add to cart
      addtocart(item, qte);
    } else if (qte < found_cartItem.quantity) {
      // remove
      removeFromcart(item, qte);
    }
  } else {
    addtocart(item, qte, true);
  }
}

function addtocart(item, quantity, isFirstInsert) {
  if (isFirstInsert) {
    // first insertion of the item to the cart
    cart_items.push(new CartItem(item.id, item.price, quantity, item.costShip));
  } else {
    // update quantity
    console.log("update cart item");
    cart_items = cart_items.map((e) => {
      if (e.id == item.id) {
        e.quantity = parseInt(quantity);
      }
      return e;
    });
  }

  displayCartItems();
}

function removeFromcart(item, quantity) {
  if (quantity == 0) {
    // remove the item from the cart
    cart_items = cart_items.filter((e) => e.id != item.id);
  } else {
    // update quantity
    cart_items = cart_items.map((e) => {
      if (e.id == item.id) {
        e.quantity = parseInt(quantity);
      }
      return e;
    });
  }

  displayCartItems();
}

function convertPrice(price) {
  const currency = document.getElementById("currency").value;

  if (currency == "cad") {
    return `$${price.toFixed(2)}`;
  } else {
    return `€${(price * 0.7).toFixed(2)}`;
  }
}

document.getElementById("currency").addEventListener("change", () => {
  displayStoreItem();
  displayCartItems();
});

document.getElementById("categories").addEventListener("change", () => {
  displayStoreItem();
  displayCartItems();
});

document.getElementById("review_btn").onclick = function (e) {
  e.preventDefault();

  const id = document.getElementById("input_id").value;

  //check if item exist
  const itemFound = store_items.find((e) => e.id == id);

  if (itemFound) {
    const text = document.getElementById("input_review").value;
    const rating = document.getElementById("input_rating").value;

    store_items = store_items.map((e) => {
      if (e.id == id) {
        e.reviews.push({
          text,
          rating,
        });
      }
      return e;
    });
  } else {
    console.log("error");
  }

  alert("Tannk you for your review of " + itemFound.name);
};

document.getElementById("item_details_btn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("input_select_id").value;

  if (id == "") {
    alert("Please enter a product ID!");
  } else {
    //check if item exist
    const itemFound = store_items.find((e) => e.id == id);

    if (itemFound) {
      alert(getDetails(itemFound));
    } else {
      alert("Error: This item doesn't exist!");
    }
  }
});

document.getElementById("add_item_btn").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("input_select_id").value;

  if (id == "") {
    alert("Please enter a product ID!");
  } else {
    //check if item exist
    const itemFound = store_items.find((e) => e.id == id);

    if (itemFound) {
      const qte = document.getElementById("input_select_qte").value;

      if (qte == "") {
        alert("Qantity must be greater than 0!");
      } else {
        if (parseFloat(qte) > itemFound.qh) {
          alert("Not enought products in the shop, Sorry!");
        } else {
          add_remove_item(itemFound, qte);
        }
      }
    } else {
      alert("This item doesnt exist!");
    }
  }
});

document.getElementById("remove_item_btn").addEventListener("click", (e) => {
  e.preventDefault();

  const id = document.getElementById("input_select_id").value;

  if (id == "") {
    alert("Please enter a product ID!");
  } else {
    //check if item exist
    const itemFound = cart_items.find((e) => e.id == id);

    if (itemFound) {
      const qte = document.getElementById("input_select_qte").value;

      if (qte == "") {
        alert("Qantity must be greater than 0!");
      } else {
        let new_qte = itemFound.quantity - qte;
        add_remove_item(itemFound, new_qte);
      }
    } else {
      alert("This product is not in the cart!");
    }
  }
});

function getDetails(item) {
  let message = `\n---------------------------------------------------------\nProduct: ${item.name
    }\n
        \n---------------------------------------------------------\nDescription:
        \n---------------------------------------------------------\n${item.descr
    }\n\n\Price:\n${convertPrice(item.price)}\n\nReviews:\n
        `;

  let rating = 0;

  item.reviews.forEach((r) => {
    message += `${r.text}\n---------------------------------------------------------\n`;
    rating += parseInt(r.rating);
  });

  message += "\nRating: ";
  if (item.reviews.length == 0) {
    message += "Not rated yet.";
  } else {
    console.log("rating = " + rating);
    console.log("NB = " + item.reviews.length);
    message += (rating / item.reviews.length).toFixed(2);
  }

  return message;
}
