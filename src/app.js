const express = require("express");
const app = express();

// Import routes
const mailRoutes = require("./routes/mailRoutes");

/*==============================================
======= Use Routes
==============================================*/
app.use("/mail", mailRoutes);

/*==============================================
======= Config
==============================================*/
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
