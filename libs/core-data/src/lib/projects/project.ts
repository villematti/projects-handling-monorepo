export interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
}

export interface ProjectDTO {
  _id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  _v?: string;
}
