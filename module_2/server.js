// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import express, { json } from 'express';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import routes from './api-routes/users.routes.js';

const app = express();
app.use(json());
routes(app);

app.get('/', (_req, res) => {
  res.json({
    message:
      'Welcome to module#2 which demonstrates how to work with CRUD operations in Node.JS.',
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
