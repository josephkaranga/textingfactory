import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
isVerified: Boolean
});
export default mongoose.model('User', UserSchema);