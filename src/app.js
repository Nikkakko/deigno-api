import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './database/mongo.js';
import {
  getAllProject,
  getAppProject,
  getGraphicProject,
  getWebProject,
  validateForm,
} from './controllers/project.js';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static('./public/images'));

app.get('/api/projects', getAllProject);
app.get('/api/projects/web', getWebProject);
app.get('/api/projects/app', getAppProject);
app.get('/api/projects/graphic', getGraphicProject);
app.post('/api/submit-form', validateForm);

app.get('/', (req, res) => {
  res.send('Hello to my API');
});

app.listen(process.env.PORT || 8088, async () => {
  try {
    connect();
    console.log(`Server running on port: 8080`);
  } catch (error) {
    console.log(error);
  }
});
