var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var StudioSchema = new Schema({
  name: { type: String, required: true },
  name_lower: { type: String },
  users: { type: [Schema.Types.ObjectId] },
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Studios' });

StudioSchema.pre('save', function(next) {
	this.name_lower = this.name.toLowerCase();
	next();
});

var Studio = mongoose.model('Studio', StudioSchema);

// Studio.remove({}, function (err) {
//   console.log('all clear!');
// })

module.exports = {
	Studio: Studio
}