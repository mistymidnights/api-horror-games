const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema =  new Schema ({
    name: { type: String, unique: true, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    platforms: [{ type: String, required: true }],
    companies: [{ type: Schema.Types.ObjectId, ref: "companies", required: true }]
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('elements', schema);