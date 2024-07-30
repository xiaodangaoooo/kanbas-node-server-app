import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://siyil718sl:DEboKoZsCBnprA0c@kanbas.olmem1g.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Kanbas&ssl=true"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors()); 
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)
