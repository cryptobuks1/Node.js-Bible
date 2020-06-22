export interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
