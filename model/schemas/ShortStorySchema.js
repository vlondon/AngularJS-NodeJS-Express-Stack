var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ShortStorySchema = new Schema({
  title: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
}, { autoIndex: false });
var ShortStory = mongoose.model('ShortStory', ShortStorySchema);

module.exports = {
	ShortStory: ShortStory
}