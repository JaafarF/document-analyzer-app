import { Category } from "./category";

export interface Document {
  id?:number;
  title?:string;
  path?:string;
  size?:number;
  language?:string;
  version?:string;
  categories?:Category[];
}
