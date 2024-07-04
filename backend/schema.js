const {Schema , model} = require("mongoose");

const ComplaintSchema = new Schema(
    {
        name: { type: String, required: true },
        rollno: { type: String, required: true },
        roomno: { type: String, required: true },
        category: {
            type: String,
            default: "Mess",
        },
        status : {type:String , default:"pending",},
        description: { type: String, required: true },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    );
    
 module.exports.ComplaintSchema = ComplaintSchema;
 module.exports.Complaint = model("complaints", ComplaintSchema);