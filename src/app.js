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

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    connect();
    console.log(`Server running on port: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
