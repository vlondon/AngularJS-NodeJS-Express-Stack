var   Model = EpiManager.Model
	, _ = require("underscore")
	, async = require('async')
	, url = require('url');

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
var selectedValues = '_id username name email lastLogin roleId createdAt';

exports.index = function(req, res) {
	async.waterfall([
		function (cb) {
			console.log("-------" + req.user);
			cb(null);
		},
		function (cb) {
			var params = url.parse(req.url, true).query;
			if (_.keys(params).length) {
				cb(null, params);
			} else {
				Model.User.find({
					deletedAt: null
				}, selectedValues, function (err, people) {
					if (err) return console.log(err);
					console.log('all');
					res.send(201, people);
				});
			}
		},
		function (params, cb) {
			if (params.username){
				Model.User.find({
					username_lower: params.username.toLowerCase(),
					deletedAt: null
				}, selectedValues, function (err, person) {
					if (err) return console.log(err);
					if (person) {
						res.send(201, person);
					} else {
						res.send(404, [{message: "not found"}]);
					}
				});
			} else if (params.email) {
				Model.User.find({
					email: params.username.toLowerCase(),
					deletedAt: null
				}, selectedValues, function (err, person) {
					if (err) return console.log(err);
					if (person) {
						res.send(201, person);
					} else {
						res.send(404, [{message: "not found"}]);
					}
				});
			} else {
				res.send(404, [{message: "invalid criteria"}]);
			}
		}
	])
};
exports.create = function(req, res) {
	var data = _.pick(req.body, validFields);
	async.waterfall([
		function (cb) {
			Model.User.findOne({
				$or : [{username_lower: data.username.toLowerCase()}, {email: data.email.toLowerCase()}],
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
	 		_id: params,
	 		deletedAt: null
	 	}, selectedValues, function (err, person) {
			if (err) {
				console.log(err);
				res.send(404, err);
			} else {
				res.send(201, person);
			}
		});
	 } else {
	 	res.send(404);
	 }
};
exports.update = function(req, res) {
	var userId = req.body._id;
	var data = _.pick(req.body, validFields);
	console.log(req.body);
	console.log(data);
	async.waterfall([
		function (cb) {
			Model.User.findOne({
				$or: [{username_lower: data.username.toLowerCase()}, {email: data.email.toLowerCase()}],
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
					p.un = person.username_lower;
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
			Model.User.findById(
			userId, 
			function (err, person) {
				if (err) {
					console.log(err);
					res.send(404, err);
				} else {
					async.each(_.keys(data), function(i, cb){
						person[i] = data[i];
						cb(err);
					}, function (err) {
						if (err) console.log(err);
						person.save();
						console.log(person._id + ' was updated');
						res.send(201);
					});
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
			_id: params
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
		res.send(404);
	}
};