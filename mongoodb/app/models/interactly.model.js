const mongoose = require('mongoose');

const AbhiSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Abhi', AbhiSchema);