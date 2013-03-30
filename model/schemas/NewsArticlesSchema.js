var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var NewsArticleSchema = new Schema({
  title: String,
  atrURL: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
}, { autoIndex: false });
var NewsArticle = mongoose.model('NewsArticle', NewsArticleSchema);

exports.index = {
	NewsArticle: NewsArticle
}