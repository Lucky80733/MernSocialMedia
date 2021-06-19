import mongoose from 'mongoose';

const postCalendarSchema = mongoose.Schema({
    title: String,
    selectedDate: String,
    selectedTime: String,
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
var PostCalendarMessage = mongoose.model('PostCalendarMessage', postCalendarSchema);
export default PostCalendarMessage;