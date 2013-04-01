var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  name: {
  	first: String,
  	last: String
  },
  password: String,
  email: String,
  roleId: { type: Number, default: 5 },
  lastLogin: { type: Date , default: Date.now },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Users' });

UserSchema.virtual('name.full').set(function (name) {
  var split = name.split(' ');
  this.name.first = split[0];
  this.name.last = split[1];
});

var User = mongoose.model('User', UserSchema);

module.exports = {
	User: User
}