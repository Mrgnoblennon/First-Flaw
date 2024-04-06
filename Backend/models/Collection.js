const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  title: {type: String, required: true},
  collectionImageUrl: {type: String, required: false},
  description: {type: String, required: false},
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  active: {type: Boolean, default: true},
  created_at: { type: Date, default: Date.now},
});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;