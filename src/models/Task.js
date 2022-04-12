const { model, Schema } = require('mongoose');

const schema = new Schema({
  title: { type: String, required: true },
});

module.exports = model('Task', schema);
