const roleModel = require("./../../db/models/role");

const createRole = (req, res) => {

    const { role, permissions } = req.body;
    const newRole = new roleModel({ role ,permissions });
    newRole.save()
    res.status(200).json(newRole);
 
  
};
module.exports = { createRole };
