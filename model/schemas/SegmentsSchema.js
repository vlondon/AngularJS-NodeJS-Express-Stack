var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var SegmentsSchema = new Schema({
  name: String,
  color: Number,
  length: Number,
  createdAt: Date,
  deletedAt: Date
}, { autoIndex: false });
var Segments = mongoose.model('Segments', SegmentsSchema);

module.exports = {
	Segments: Segments
}