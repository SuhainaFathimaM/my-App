let bagItems;
const items = [
    {
        id: '001',
        image: "1.jpg",
        company: 'DressBerry',
        item_name: 'Women Mauve Analogue Watch',
        original_price: 3299,
        current_price: 1484,
        discount_percentage: 55,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars:4.4,
            count: '37k',
        },
    },
    {
        id: '002',
        image: '2.jpg',
        company: 'Varanga',
        item_name: 'Women Mauve Floral Yoke Design Chanderi Silk Kurta with Trousers & With Dupatta',
        original_price: 5999,
        current_price: 1619,
        discount_percentage: 73,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4,
            count: '5.6k',
        },
    },
    {
        id: '003',
        image: '3.jpg',
        company: 'Saree mall',
        item_name: 'Women Pink Woven Design Silk Blend Saree',
        original_price: 7699,
        current_price: 1077,
        discount_percentage: 86,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4.1,
            count: '2k',
        },
    },
    {
        id: '004',
        image: '4.jpg',
        company: 'DOROTHY PERKINS',
        item_name: 'Women Tassel Detail Horsebit Loafers',
        original_price: 5249,
        current_price: 2624,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4.0,
            count: '4k',
        },
    },
    {
        id: '005',
        image: '5.jpg',
        company: 'Jompers',
        item_name: 'Geometric Embroidered Sequinned Pure Cotton Straight Kurta With Pyjamas',
        original_price: 5499,
        current_price: 1374,
        discount_percentage: 75,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4.2,
            count: '8k',
        },
    },
    {
        id: '006',
        image: '6.jpg',
        company: 'Skybags',
        item_name: 'Unisex Black & White Brand Logo Print Backpack- 21.3 Ltrs',
        original_price: 2100,
        current_price: 2100,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 5.0,
            count: '5k',
        },
    },
    {
        id: '007',
        image: '7.jpg',
        company: 'pspeaches',
        item_name: 'Magenta & White Floral A-Line Cotton Dress with Attached Shrugs',
        original_price: 2125,
        current_price: 1125,
        discount_percentage: 55,
        return_period: 14,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4.0,
            count:'5k',
        },
    },
    {
        id: '008',
        image: '8.jpg',
        company: 'Lakme',
        item_name: 'Sun Expert Ultra Matte SPF 40 PA+++ Compact - 7g',
        original_price: 299,
        current_price: 254,
        discount_percentage: 15,
        return_period: 0,
        delivery_date: '10 Jan 2024',
        rating: {
            stars: 4.4,
            count: '15.6k',
        },
    }

];


onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

displayItemsOnHomePage();
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {

  let itemsContainerElement = document.querySelector('.itemscontainer');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="./${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count} Ratings
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}









// let bagItems = [];
// onload();

// function onload(){
//     let bagItemsStr = localStorage.getItem('bagItems');
//     bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//     displayItemsOnHome();
//     displayCount();
// }

// function addtobag(itemId)
// {
//     bagItems.push(itemId);
//     localStorage.setItem('bagItems',JSON.stringify(bagItems));
//     displayCount();

// }
// function displayCount()
// {
//     let bagItemCount = document.querySelector('.bag-item-count');
//     if (bagItems.length > 0)
//     {
//         bagItemCount.style.visibility = "visible";
//         bagItemCount.innerText = bagItems.length;
//     }
//     else
//     {
//         bagItemCount.style.visibility = "hidden";
//     }
// }


// function displayItemsOnHome(){
//     let itemsContainerElement = document.querySelector('.itemscontainer');
//     let innerHTML = '';

//     items.forEach(item => {  
//         innerHTML += `
//         <div class="itemcontainer">
//         <img class="item-image"src="${item.image}" alt="item 1">
//         <div class="rating">${item.rating.stars} ⭐| ${item.rating.count}</div>
//         <div class="company">${item.company}</div>
//         <div class="item">${item.item_name}</div>
//         <div class="price">
//             <span class="current-price">Rs ${item.current_price}</span>
//             <span class="original-price"> Rs ${item.original_price}</span>
//             <span class="discount" >(${item.discount_percentage}% OFF)</span>
//         </div>
//         <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
//     </div>`

//     });
//     itemsContainerElement.innerHTML = innerHTML;
// }















// let item={
//     item_image: 'images/1.jpg',
//     rating:{
//         stars:4.5,
//         noOfreviews:1400,

//     },
//     company_name:"Carlton-London",
//     item_name:"Floral Studs",
//     current_price:606,
//     original_price:1045,
//     discount_percentage:42,


// }












