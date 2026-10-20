import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Allows Express to parse data coming from HTML forms (req.body)
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini MessageBox, messages: messages });
  });
  
  app.get('/new', (req, res) => {
  res.render('form');
  });
  
  app.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
 // Push the new message into our array with a timestamp
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  
  // Redirect back to the homepage to see the new message
  res.redirect('/');
});

  // THIS IS WHAT KEEPS YOUR SERVER ALIVE
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
