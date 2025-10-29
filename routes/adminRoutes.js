const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

router.post('/create articles', (req, res) => {

  res.send('New article created');
});

router.put('/articles/:id', (req, res) => {
  const articleId = req.params.id;
    
    res.send(`Article with ID: ${articleId} updated`);
});

router.delete('/articles/:id', (req, res) => {
  const articleId = req.params.id;  

    res.send(`Article with ID: ${articleId} deleted`);
});

module.exports = router;