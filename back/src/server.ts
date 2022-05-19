process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '~app';
// import AuthRoute from '~routes/auth.route';
// import IndexRoute from '~routes/index.route';
// import UsersRoute from '~routes/users.route';
// import WaitingListRoute from '~routes/waiting-list.route';
import { ProductsRoute, UsersRoute } from '~routes';
import validateEnv from '~utils/validateEnv';

try {
  validateEnv();

  const app = new App([
    new ProductsRoute(),
    new UsersRoute(),
    /*new IndexRoute(), new AuthRoute(), new UsersRoute(), new WaitingListRoute()*/
  ]);
  app.listen();
} catch (error) {
  console.log('ERROR');
}
