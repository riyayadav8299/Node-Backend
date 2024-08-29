const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileSize: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const noteSchema = new mongoose.Schema({
  relatedTo: {
    type: { type: String, required: true },
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  attachments: [attachmentSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create the Note model from the schema
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;