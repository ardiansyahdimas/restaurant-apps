/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <style>
    .header-contaniner{
    background-color: #2c3e50;
 }
 input{
  width: 50%;
  padding: 12px 20px 12px 40px;
  transition: width 0.5s ease-in-out;
  top:0;
  margin-bottom:40px;
  margin-left:auto;
  margin-right:auto;
  display:block;
  border-radius:10px;
  outline:none;
  font-size:16px;
}

input:focus {
  width: 80%;
}
    </style>
     <div class="content"> 
     <h2 class="content__heading">Your Favorite Resto</h2>
     <input id="query" type="text" placeholder="Search Resto">
         <div id="resto-search-container">
             <div id="allresto" class="content-resto allresto">
                
             </div>
         </div>
     </div>
 `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(allresto) {
    this.showFavoriteResto(allresto);
  }

  showFavoriteResto(allresto = []) {
    let html;
    if (allresto.length) {
      html = allresto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('allresto').innerHTML = html;

    document.getElementById('allresto').dispatchEvent(new Event('allresto:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="resto-item__not__found">Tidak ada Resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
