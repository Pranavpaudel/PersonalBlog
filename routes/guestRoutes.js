const express = require('express');
const router = express.Router();

//guest routes 
router.get('/articles', (req, res) => {
  res.send('List of public articles');
});

router.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  res.send(`Viewing article with ID: ${articleId}`);
});

module.exports = router;