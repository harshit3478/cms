const { Complaint } = require("../schema");

const getComplaints = async (req, res) => {
  try {
    const { category, status, pageNo } = req.query;
    var query = {};
    if (!category && !status && !pageNo) {
      query = await Complaint.find();
    } else if (category && status && pageNo) {
      query = await Complaint.find({ category: category, status: status })
        .skip((pageNo - 1) * 5)
        .limit(5);
    } else if (category && status) {
      query = await Complaint.find({ category: category, status: status });
    } else if (category && pageNo) {
      query = await Complaint.find({ category: category })
        .skip((pageNo - 1) * 5)
        .limit(5);
    } else if (status && pageNo) {
      query = await Complaint.find({ status: status })
        .skip((pageNo - 1) * 5)
        .limit(5);
    } else if (category) {
      query = await Complaint.find({ category: category });
    } else if (status) {
      query = await Complaint.find({ status: status });
    } else if (pageNo) {
      query = await Complaint.find()
        .skip((pageNo - 1) * 5)
        .limit(5);
    }
    return res.status(200).json({ data: query });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getComplaints;
