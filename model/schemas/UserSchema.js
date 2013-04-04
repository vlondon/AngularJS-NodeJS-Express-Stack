var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, lowercase: true, required: true},
  name: {
  	first: { type: String, required: true },
  	last: { type: String, required: true }
  },
  password: { type: String, required: true },
  email: { type: String, required:true },
  roleId: { type: Number, default: 5 },
  lastLogin: { type: Date , default: Date.now },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Users' });

var User = mongoose.model('User', UserSchema);

module.exports = {
	User: User
}