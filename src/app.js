import express from "express"
const app = express();

// Import routes
import mailRoutes from "./routes/mailRoutes";

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
