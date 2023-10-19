import { IntegerType } from "mongodb";

export interface BookInterface {
  id: string;
  title: string;
  author: string;
  year: IntegerType;
  ISBN: string;
  description: string;
  thumbnailUrl: string;
  fileUrl: string;
  pages: IntegerType;
  category: string;
  language: string;
}
