var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var RolesSchema = new Schema({
  admin: Number,
  guest: Number,
  subscriber: Number
}, { autoIndex: false });
var Roles = mongoose.model('Roles', RolesSchema);

module.exports = {
	Roles: Roles
}