var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://nodejs:lnemspod@linus.mongohq.com:10043/app13962991');

require('./schemas/UserSchema');
require('./schemas/RolesSchema');
require('./schemas/SegmentsSchema');
require('./schemas/NewsArticleSchema');
require('./schemas/ShortStorySchema');
require('./schemas/YouTubeLinkSchema');
// require('./CalendarSchema');
// require('./EpisodeSchema');

module.exports = {
	User: User,
	Roles: Roles,
	Segments: Segments,
	NewsArticle: NewsArticle,
	ShortStory: ShortStory,
	YouTubeLink: YouTubeLink
}