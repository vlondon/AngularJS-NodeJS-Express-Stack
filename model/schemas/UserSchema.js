var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  fName: String,
  lName: String,
  password: String,
  roleId: Number,
  createdAt: { type: Date, default: Date.now },
  deletedAt: Date
}, { autoIndex: false });
var User = mongoose.model('User', UserSchema);

module.exports = {
	User: User
}