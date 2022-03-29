import express from "express";
import bodyParser from "body-parser";

import { PORT } from "./config.js";
import product_routes from "./routes/product_route.js";
import school_routes from "./routes/school_route.js";
import student_routes from "./routes/student_route.js";

const app = express();

const error_handling = (err, req, res, next) => {
    return res.status(500).json({message: err.toString()});
}

app.use(error_handling);
app.use(bodyParser.json({ type: "application/json" }));
app.use("/products", product_routes);
app.use("/schools", school_routes);
app.use("/students", student_routes);


app.listen(PORT);
