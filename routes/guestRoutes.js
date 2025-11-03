const express = require('express');
const router = express.Router();

// Import guest controller functions
const {
  getHomePage,
  getBlogPosts,
  getSinglePost,
  getContactPage,
  getAboutPage
} = require('../controllers/guestController');

// Public routes for blog visitors
router.get('/', getHomePage); // Homepage
router.get('/posts', getBlogPosts); // List of blog posts
router.get('/posts/:id', getSinglePost); // Individual blog post
router.get('/contact', getContactPage); // Contact page
router.get('/about', getAboutPage); // About page

module.exports = router;