/* eslint-disable linebreak-style */
import Resto from '../views/pages/resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Resto,
  '/resto': Resto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
