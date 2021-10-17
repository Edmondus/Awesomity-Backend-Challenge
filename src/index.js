import swaggerUI from 'swagger-ui-express';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerDocs from './docs';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(router);
app.use((err, req, res, next) => {
    console.log(err);
    if (res.headersSent) {
      return next(err)
    }
    res.status(500).send({ error: err })
  })

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server started at:...${port}`));

export default app;
