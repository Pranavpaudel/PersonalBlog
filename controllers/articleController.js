const fs = require("fs");
const path = require("path");

const articlesDir = path.join(__dirname, "../content");

// Get all articles
exports.getAllArticles = (req, res) => {
  fs.readdir(articlesDir, (err, files) => {
    if (err) return res.status(500).send("Error reading articles");
    const articles = files.map((file) => {
      const data = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      return JSON.parse(data);
    });
    res.json(articles);
  });
};

// Get article by ID
exports.getArticleById = (req, res) => {
  const articleId = req.params.id;
  const filePath = path.join(articlesDir, `${articleId}.json`);
  if (!fs.existsSync(filePath))
    return res.status(404).send("Article not found");
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
};

// Create new article
exports.createArticle = (req, res) => {
  const { title, content, date } = req.body;
  const articleId = Date.now();
  const filePath = path.join(articlesDir, `${articleId}.json`);
  const articleData = { id: articleId, title, content, date };
  fs.writeFileSync(filePath, JSON.stringify(articleData, null, 2));
  res.status(201).json(articleData);
};

// Update article
exports.updateArticle = (req, res) => {
  const articleId = req.params.id;
  const filePath = path.join(articlesDir, `${articleId}.json`);
  if (!fs.existsSync(filePath))
    return res.status(404).send("Article not found");
  const { title, content, date } = req.body;
  const updatedData = { id: articleId, title, content, date };
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  res.json(updatedData);
};

// Delete article
exports.deleteArticle = (req, res) => {
  const articleId = req.params.id;
  const filePath = path.join(articlesDir, `${articleId}.json`);
  if (!fs.existsSync(filePath))
    return res.status(404).send("Article not found");
  fs.unlinkSync(filePath);
  res.send(`Article with ID ${articleId} deleted`);
};
