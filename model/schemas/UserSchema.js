var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true},
  username_lower: { type: String },
  name: {
  	first: { type: String, required: true },
  	last: { type: String, required: true }
  },
  password: { type: String, required: true },
  email: { type: String, lowercase: true, required:true },
  roleId: { type: Number, default: 5 },
  lastLogin: { type: Date , default: Date.now },
  updatedAt: { type: Date , default: Date.now },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
}, { autoIndex: false, collection: 'Users' });

UserSchema.pre('save', function (next) {
  this.username_lower = this.username.toLowerCase();
  next();
});

var User = mongoose.model('User', UserSchema);

// User.remove({}, function (err) {
//   console.log('all clear!');
// })

module.exports = {
	User: User
}