const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

router.post('/create articles', (req, res) => {
  // Logic to create a new article
  res.send('New article created');
});

router.delete('/articles/:id', (req, res) => {
  const articleId = req.params.id;  
    // Logic to delete the article with the given ID
    res.send(`Article with ID: ${articleId} deleted`);
});

module.exports = router;