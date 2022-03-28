/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (resto) => `
<article class="card card-restaurant-item">
<h2 class="resto__title">${resto.name}</h2>

<figure class="card-image">
  <picture>
    <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE}${resto.pictureId}">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE}${resto.pictureId}" alt="${resto.name}" />         
  </picture>
</figure>
<div class="resto_info">
<h3>Information</h3>
  <h4>Address</h4>
  <p>${resto.address} ${resto.city}</p>
  <h4>Categories</h4>
  <p>${resto.categories
    .map(
      (categories) => `
        ${categories.name}
      `,
    ).join('|')
}</p>
  <h4>Drinks Menu</h4>
  <p>${resto.menus.drinks
    .map(
      (drink) => `
        ${drink.name}
      `,
    ).join('|')
}</p>
<h4>Foods Menu</h4>
  <p>${resto.menus.foods
    .map(
      (food) => `
        ${food.name}
      `,
    ).join('|')
}</p>
  <h4>Rating</h4>
  <p>⭐️ ${resto.rating}</p>
</div>
<div class="resto__overview">
  <h3>Description</h3>
  <p>${resto.description}</p>
  <h3> Customer Reviews</h3>
  <p>${resto.customerReviews
    .map(
      (customerReviews) => `
        <p>${customerReviews.name}</p>
        <p>${customerReviews.review}</p>
        <p>${customerReviews.date}</p>
      `,
    ).join('<hr/>')
}</p>
 
</div>
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="card card-restaurant-item">
<figure class="card-image">
<picture>
<source media="(max-width: 600px)"  data-srcset="${CONFIG.BASE_IMAGE}${resto.pictureId}">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE}${resto.pictureId}" alt="${resto.name || '-'}" />     
</picture>
</figure>
<div class="card-content">
<h1 class="resto__title">
<a href="/#/detail/${resto.id}" class="card-restaurant-link">
${resto.name || '-'} 
</a>
</h1>
<p class="card-description">${resto.description || '-'}</p>
<div class="rating">
<p>⭐️${resto.rating || '-'} | ${resto.city || '-'}</p>
</div>
</div>
</article>
  `;

const createLikeRestoButtonTemplate = () => `
<button aria-label="like this resto" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestoButtonTemplate = () => `
<button aria-label="unlike this resto" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
