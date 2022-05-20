process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '~app';
import { ProductsRoute, UsersRoute } from '~routes';

try {
  const app = new App([new ProductsRoute(), new UsersRoute()]);

  app.listen();
} catch (error) {
  console.log('ERROR');
}
