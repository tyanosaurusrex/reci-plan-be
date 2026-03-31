import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import productRoute from "./routes/productRoute.js";
import unitRoute from "./routes/unitRoute.js";
import recipeRoute from "./routes/recipeRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.use("/api/products", productRoute);
app.use("/api/units", unitRoute);
app.use("/api/recipes", recipeRoute);

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
