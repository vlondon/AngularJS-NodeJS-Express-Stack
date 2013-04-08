var   Model = EpiManager.Model
	, _ = require("underscore")
	, async = require('async');

var validFields =  ['name',
					'users',
					'status'];
var showFields =   ['name',
					'_id',
					'users',
					'status',
					'createdAt'];
var selectedFields = 'name _id users status createdAt';

exports.index = function(req, res) {
	Model.Studio.find({
		deletedAt: null
	}, selectedFields, function (err, studios) {
		if (err) return console.log(err);
		res.send(201, studios);
	});
};
exports.create = function(req, res) {
	var data = _.pick(req.body, validFields);
	async.waterfall([
		function (cb) {
			Model.Studio.findOne({
				name_lower: data.name.toLowerCase(),
				deletedAt: null
			}, function (err, studio) {
				if (err){
					console.log(err);
				} else if (!studio) {
					cb(null);
				} else {
					res.send(404, {message: "name taken"});
				}
			});
		},
		function (cb) {
			var newStudio = new Model.Studio(data).save(function (err, newstudio) {
				if (err) {
					console.log(err);
				} else {
					console.log(newstudio + " joined our site!!!");
					res.send(201);
				}
			});
		}
	])
};
exports.show = function(req, res) {
	 var params = req.params.user;
	 if (params) {
	 	Model.Studio.findOne({
	 		username: params
	 	}, selectedFields, function (err, studio) {
			if (err) {
				console.log(err);
				res.send(404, err);
			} else {
				res.send(201, studio);
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
			Model.Studio.findOne({
				$or: [{username: data.username}, {email: data.email}],
				$nor: [{_id: userId}], 
				deletedAt: null
			}, function (err, studio) {
				var p = {}
				  , d = {}; 
				if (err){
					console.log(err);
				} else if (!studio) {
					cb(null);
				} else if (studio) {
					p.un = studio.username.toLowerCase();
					p.em = studio.email;
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
			Model.Studio.findByIdAndUpdate(
			userId, 
			data, 
			function (err, studio) {
				if (err) {
					console.log(err);
					res.send(404, err);
				} else {
					console.log(studio._id + ' was updated');
					res.send(201, _.pick(studio, showFields));
				}
			});
		}
	])
};
exports.destroy = function(req, res) {
	var params = req.params.user;
	var deleteDate = new Date();
	if (params) {
		Model.Studio.findOneAndUpdate({
			username: params
		}, {
			deletedAt: deleteDate
		}, function (err, studio) {
			if (err) {
				console.log(err);
				res.send(404, err);
			} else {
				console.log(studio._id + ' was deleted');
				res.send(201);
			}
		});
	} else {

	}

};