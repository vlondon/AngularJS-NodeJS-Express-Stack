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
  roleId: Number,
  createdAt: { type: Date, default: Date.now },
  deletedAt: Date
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