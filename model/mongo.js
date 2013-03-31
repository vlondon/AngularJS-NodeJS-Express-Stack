var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://nodejs:lnemspod@linus.mongohq.com:10043/app13962991');

// require('./CalendarSchema');
// require('./EpisodeSchema');

module.exports = {
	User: require('./schemas/UserSchema').User,
	Roles: require('./schemas/RolesSchema').Roles,
	Segments: require('./schemas/SegmentsSchema').Segments,
	NewsArticle: require('./schemas/NewsArticlesSchema').NewsArticle,
	ShortStory: require('./schemas/ShortStorySchema').ShortStory,
	YouTubeLink: require('./schemas/YouTubeLinkSchema').YouTubeLink
}