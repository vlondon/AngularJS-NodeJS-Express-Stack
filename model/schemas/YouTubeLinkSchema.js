var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var YouTubeLinkSchema = new Schema({
  title: String,
  atrURL: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
}, { autoIndex: false });
var YouTubeLink = mongoose.model('YouTubeLink', YouTubeLinkSchema);

module.exports = {
	YouTubeLink: YouTubeLink
}