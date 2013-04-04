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
	var data = _.pick(req.body, validFields);
	async.waterfall([
		function (cb) {
			Model.User.findOne({
				$or : [{username: data.username}, {email: data.email}],
				deletedAt: null
			}, function (err, person) {
				var p = {}
				  , d = {};
				if (err){
					console.log(err);
				} else if (!person) {
					cb(null);
				} else if (person) {
					p.un = person.username.toLowerCase();
					p.em = person.email;
					d.un = data.username.toLowerCase();
					d.em = data.email.toLowerCase();

					if ((p.un != d.un) && (p.em == d.em)) {
						res.send(401, {message: "user email exists"});
					} else if ((p.un == d.un) && (p.em != d.em)) {
						res.send(401, {message: "username exists"});
					} else if ((p.un == d.un) && (p.em == d.em)) {
						res.send(401, {message: "user already exists"});
					} else {
						res.send(404, {message: "error when saving"});
					}
				} else {
					res.send(404, {message: "error when saving"});
				}
			});
		},
		function (cb) {
			var newUser = new Model.User(data).save(function (err, newuser) {
				if (err) {
					console.log(err);
				} else {
					console.log(newuser + " joined our site!!!");
					res.send(201);
				}
			});
		}
	])
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
	var data = _.pick(req.body, validFields);
	async.waterfall([
		function (cb) {
			Model.User.findOne({
				$or: [{username: data.username}, {email: data.email}],
				$nor: [{_id: userId}], 
				deletedAt: null
			}, function (err, person) {
				var p = {}
				  , d = {}; 
				if (err){
					console.log(err);
				} else if (!person) {
					cb(null);
				} else if (person) {
					p.un = person.username.toLowerCase();
					p.em = person.email;
					d.un = data.username.toLowerCase();
					d.em = data.email.toLowerCase();

					if ((p.un != d.un) && (p.em == d.em)) {
						res.send(401, {message: "user email exists"});
					} else if ((p.un == d.un) && (p.em != d.em)) {
						res.send(401, {message: "username exists"});
					} else if ((p.un == d.un) && (p.em == d.em)) {
						res.send(401, {message: "user already exists"});
					} else {
						res.send(404, {message: "error when saving"});
					}
				} else {
					res.send(404, {message: "error when saving"});
				}
			});
		},
		function(cb) {
			Model.User.findByIdAndUpdate(
			userId, 
			data, 
			function (err, person) {
				if (err) {
					console.log(err);
					res.send(404, err);
				} else {
					console.log(person._id + ' was updated');
					res.send(201, _.pick(person, showFields));
				}
			});
		}
	])
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