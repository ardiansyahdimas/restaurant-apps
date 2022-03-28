/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Showing empty liked resto', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada Resto untuk ditampilkan', '.resto-item__not__found');
});
Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada Resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Tidak ada Resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto__title a');
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#allresto');
  const firstcondition = 'Tidak ada Resto untuk ditampilkan';
  const unlikedRestoTitle = await I.grabTextFrom('#allresto');

  assert.strictEqual(unlikedRestoTitle, firstcondition);
});
