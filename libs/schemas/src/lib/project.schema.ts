import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  details: String,
  percentComplete: Number,
  approved: Boolean
});
