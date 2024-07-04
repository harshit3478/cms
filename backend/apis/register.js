const { Complaint } = require("../schema");

const register = async (req, res) => {
    try{
        console.log(req.body)
        const complaint = await Complaint.create(req.body);
        return res.status(200).json({data: complaint , message: "Complaint registered successfully"});
    }
    catch(error){
        return res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = register;