/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
        <div class="hero">
        <div class="hero__inner">
            <h1>Our Resto</h1>
            <h2>Healthy Food, Healthy Life</h2>
        </div>
        </div>
      <h2 class="content__heading">List Resto</h2>
      <div id="allresto" class="content-resto allresto">
    
    </div>
      `;
  },

  async afterRender() {
    const resto = await TheRestoDbSource.Resto();
    const restoContainer = document.querySelector('#allresto');
    resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
