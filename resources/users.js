var   Model = EpiManager.Model
	, _ = require("underscore")
	, async = require('async');

exports.index = function(req, res) {
	console.log('pinged');
	Model.User.find({}, function (err, person) {
		if (err) return console.log(err);
		console.log('person');
		res.send(201, person);
	});
};
exports.create = function(req, res) {
	var data = req.body;
	var newUser = new Model.User(data).save(function (err, newuser) {
		if (err) {
			console.log(err);
		} else {
			console.log(newuser + " joined our site!!!");
		}
	});
};
exports.show = function(req, res) {
 
};
exports.update = function(req, res) {
 
};
exports.destroy = function(req, res) {
 
};