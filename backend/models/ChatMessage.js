import mongoose from 'mongoose';
const ChatMessageSchema = new mongoose.Schema({
user: String,
content: String,
status: { type: String, default: 'pending' },
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('ChatMessage', ChatMessageSchema);