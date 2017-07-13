const mongoose = require('mongoose');
const schema = mongoose.schema;

const UserSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  description: String,
  imgUrl: {type: String, default: DEFAULT_IMG_URL},

});

const User = mongoose.model ('User', UserSchema);
module.exports = User;
