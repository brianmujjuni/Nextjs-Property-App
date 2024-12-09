import { Schema, model, models } from "mongoose";
import User from "./User";
const PropertySchema = new Schema({}, { timestamps: true });

const Property = models.Property || model("Property", PropertySchema);
export default User;
