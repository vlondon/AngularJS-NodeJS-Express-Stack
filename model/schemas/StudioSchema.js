var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var StudioSchema = new Schema({
  name: {type: String, required: true},
  users: {type: [Schema.Types.ObjectId]},
  status: {type: String},
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Users' });

var Studio = mongoose.model('Studio', StudioSchema);

// User.remove({}, function (err) {
//   console.log('all clear!');
// })

module.exports = {
	Studio: Studio
}