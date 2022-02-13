const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', TaskSchema);
