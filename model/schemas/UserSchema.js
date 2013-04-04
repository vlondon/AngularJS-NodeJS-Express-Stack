var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true},
  name: {
  	first: { type: String, required: true },
  	last: { type: String, required: true }
  },
  password: { type: String, required: true },
  email: { type: String, lowercase: true, required:true },
  roleId: { type: Number, default: 5 },
  lastLogin: { type: Date , default: Date.now },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Users' });

var User = mongoose.model('User', UserSchema);

// User.remove({}, function (err) {
//   console.log('all clear!');
// })

module.exports = {
	User: User
}