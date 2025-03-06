import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { CORS_OPTIONS, RATE_LIMIT_OPTIONS } from "./config/01.index";

// ROUTES
import defaultRouter from "./app/routes/default";
import {Login} from "./app/controllers/authentication/login";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.use(helmet());
app.use(morgan("dev"));
app.use(compression());
app.use(rateLimit(RATE_LIMIT_OPTIONS));
app.use(express.urlencoded({ extended: true }));

app.use("/", defaultRouter);

//WITH THIS LOGIN METHOD, FIREBASE IS INITIALIZED
app.use("/api/v1/login", Login);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});