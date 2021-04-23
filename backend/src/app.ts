import express from 'express';
import Router from 'express-promise-router';

export function createApp() {
  const app = express();
  const router = Router();
  registerRoutes(router);
  app.use(router)
  return app;
}

function registerRoutes(router: express.Router) {
  router.post('/api/testing', async (req, res) => {
    res.send({ success: true });
  });
}
