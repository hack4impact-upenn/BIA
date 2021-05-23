import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import userRouter from '../routes/user.api';
import orgRouter from '../routes/organization.api';
var upload = multer({ dest: 'uploads/' });

const createServer = (): express.Express => {
  const app = express();
  app.set('port', process.env.PORT || 5000);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(cors());

  // API Routes
  app.use('/api/users', userRouter);
  app.use('/api/org', orgRouter);

  // Serving static files
  if (process.env.NODE_ENV === 'production') {
    const root = path.join(__dirname, '..', 'client', 'build');

    app.use(express.static(root));
    app.get('*', (_, res) => {
      res.sendFile('index.html', { root });
    });
  }

  return app;
};

export default createServer;
