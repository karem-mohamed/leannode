import mongoose from "mongoose";

const averageSchema = new mongoose.Schema({ values: Object });

const Average = mongoose.model("Average", averageSchema);

export default Average;
