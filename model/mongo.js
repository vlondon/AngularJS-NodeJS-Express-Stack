var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://nodejs:lnemspod@linus.mongohq.com:10043/app13962991');

var UserSchema = new Schema({
  userId: {type: Number, index: true},
  username: String,
  fName: String,
  lName: String,
  password: String,
  roleId: Number,
  createdAt: Date,
  deletedAt: Date
});
var User = mongoose.model('User', UserSchema);

var RolesSchema = new Schema({
  admin: Number,
  guest: Number,
  subscriber: Number
});
var Roles = mongoose.model('Roles', RolesSchema);

var SegmentsSchema = new Schema({
  segmentId: {type: Number, index: true},
  name: String,
  color: Number,
  length: Number,
  createdAt: Date,
  deletedAt: Date
});
var Segments = mongoose.model('Segments', SegmentsSchema);

var NewsArticleSchema = new Schema({
  newsArticleId: {type: Number, index: true},
  title: String,
  atrURL: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
});
var NewsArticle = mongoose.model('NewsArticle', NewsArticleSchema);

var ShortStorySchema = new Schema({
  shortStoryId: {type: Number, index: true},
  title: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
});
var ShortStory = mongoose.model('ShortStory', ShortStorySchema);

var YouTubeLinkSchema = new Schema({
  youTubeLinkId: {type: Number, index: true},
  title: String,
  atrURL: String,
  userNote: String,
  createdBy: String,
  createdAt: Date,
  deletedAt: Date
});
var YouTubeLink = mongoose.model('YouTubeLink', YouTubeLinkSchema);

var CalendarSchema = new Schema({

});

var EpisodeSchema = new Schema({

});

module.exports = {
	User: User,
	Roles: Roles,
	Segments: Segments,
	NewsArticle: NewsArticle,
	ShortStory: ShortStory,
	YouTubeLink: YouTubeLink
}