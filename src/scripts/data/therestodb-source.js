/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */

import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async Resto() {
    const response = await fetch(API_ENDPOINT.RESTOLIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
