var   Model = EpiManager.Model
	, _ = require("underscore")
	, async = require('async');

var validFields =  ['username',
					'name',
					'password',
					'email',
					'roleId'];
var showFields =   ['username',
					'_id',
					'name',
					'email',
					'lastLogin',
					'roleId',
					'createdAt'];

exports.index = function(req, res) {
	Model.User.find({
		deletedAt: null
	}, function (err, person) {
		if (err) return console.log(err);
		var people = [];
		for (var i = 0; i < person.length; i++) {
			var shakedown = _.pick(person[i], showFields);
			people.push(shakedown);
		}
		res.send(201, people);
	});
};
exports.create = function(req, res) {
	// Underscore picks from req.body the validFields
	var data = _.pick(req.body, validFields);
	// Save the new User
	var newUser = new Model.User(data).save(function (err, newuser) {
		if (err) {
			console.log(err);
		} else {
			console.log(newuser + " joined our site!!!");
			res.send(201);
		}
	});
};
exports.show = function(req, res) {
	 var params = req.params.user;
	 if (params) {
	 	Model.User.findOne({
	 		username: params
	 	}, function (err, person) {
			if (err) {
				console.log(err);
				res.send(404, err);
			} else {
				res.send(201, _.pick(person, showFields));
			}
		});
	 } else {
	 	res.send(404);
	 }
};
exports.update = function(req, res) {
	var userId = req.body._id;
	var body = _.pick(req.body, validFields);
	Model.User.findByIdAndUpdate(
		userId, 
		body, 
		function (err, person) {
		if (err) {
			console.log(err);
			res.send(404, err);
		} else {
			console.log(person._id + ' was updated');
			res.send(201, _.pick(person, showFields));
		}
	});
};
exports.destroy = function(req, res) {
	var params = req.params.user;
	var deleteDate = new Date();
	if (params) {
		Model.User.findOneAndUpdate({
			username: params
		}, {
			deletedAt: deleteDate
		}, function (err, person) {
			if (err) {
				console.log(err);
				res.send(404, err);
			} else {
				console.log(person._id + ' was deleted');
				res.send(201);
			}
		});
	} else {

	}

};