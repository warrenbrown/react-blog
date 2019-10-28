const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/Article');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No articles found' }));
});

// @route GET api/articles/:id
// @description Get single Article by id
// @access Public
router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(Article => res.json(Article))
    .catch(err => res.status(404).json({ noArticlefound: 'No Article found' }));
});

// @route GET api/articles
// @description add/save Article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(Article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Article' }));
});

// @route GET api/articles/:id
// @description Update Article
// @access Public
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(Article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/articles/:id
// @description Delete Article by id
// @access Public
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then(Article => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});

module.exports = router;