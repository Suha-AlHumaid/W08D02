const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
