import express, { json } from 'express';
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
