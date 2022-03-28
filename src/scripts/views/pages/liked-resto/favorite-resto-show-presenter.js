/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

class FavoriteRestoShowPresenter {
  constructor({ view, favoriteResto }) {
    this._view = view;
    this._favoriteResto = favoriteResto;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const allresto = await this._favoriteResto.getAllResto();
    this._displayResto(allresto);
  }

  _displayResto(allresto) {
    this._view.showFavoriteResto(allresto);
  }
}

export default FavoriteRestoShowPresenter;
