const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProjectSchema = new Schema(
  {
    name: { type: String, maxlength: 70 },
    description: { type: String },
    image: { type: String },
    tags: [{ type: String }]
 
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);
module.exports = mongoose.model("Project", ProjectSchema);
