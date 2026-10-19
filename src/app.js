import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'EJS rocks!' });
  });

  // THIS IS WHAT KEEPS YOUR SERVER ALIVE
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
