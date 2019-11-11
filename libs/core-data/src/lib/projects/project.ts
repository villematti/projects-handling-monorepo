import * as mongoose from 'mongoose';

export interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
}

export const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  details: String,
  percentComplete: Number,
  approved: Boolean
});
