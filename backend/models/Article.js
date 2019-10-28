const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);