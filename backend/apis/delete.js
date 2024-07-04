const { Complaint } = require("../schema");

const deleteComplaint = async (req, res) => {
    try{
        const {id} = req.params;
        const complaint = await Complaint.findByIdAndDelete(id);
        return res.status(200).json({data: complaint , message: "Complaint deleted successfully"});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

module.exports = deleteComplaint;