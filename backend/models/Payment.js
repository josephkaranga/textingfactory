import mongoose from 'mongoose';
const PaymentSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
amount: Number,
method: String,
status: { type: String, default: 'pending' },
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Payment', PaymentSchema);