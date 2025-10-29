const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

// Create a new article
router.post('/articles', (req, res) => {
  res.send('New article created');
});

// Update an existing article
router.put('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  res.send(`Article with ID: ${articleId} updated`);
});

// Delete an article
router.delete('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  res.send(`Article with ID: ${articleId} deleted`);
});

module.exports = router;