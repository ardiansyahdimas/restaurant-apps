/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
      <style>
      .header-contaniner{
      background-color: #2c3e50;
   }
      </style>
      <div id="resto" class="content-resto-detail"> </div>
      <div id="likeButtonContainer"></div>
      `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        rating: resto.rating,
        city: resto.city,
        pictureId: resto.pictureId,
      },
    });
  },
};

export default Detail;
