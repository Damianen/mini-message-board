import { Router } from 'express';

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

const router = Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini message Board!', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('new', { title: 'New message'});
});

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect('/');
});

export default router;
