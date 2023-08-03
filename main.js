const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const asideDetails = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');
const detailClose = document.querySelector('.product-detail-secondary-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
cardsContainer.addEventListener('click', toggleProductDetail);
detailClose.addEventListener('click', closeDetails);

function toggleDesktopMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  closeDetails();
  mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
  const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
 
  if(!ismobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  closeDetails();
  aside.classList.toggle('inactive');
}
function toggleProductDetail(){
  const isAsideDetailsClosed = asideDetails.classList.contains('inactive');
 
  if(!isAsideDetailsClosed){
    asideDetails.classList.add('inactive');
  }

  asideDetails.classList.toggle('inactive');
}
function closeDetails(){
  asideDetails.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productIngCard = document.createElement('img');
  productIngCard.setAttribute('src','./icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productIngCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}};

renderProducts(productList);