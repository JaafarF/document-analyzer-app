import { Position } from "./position";

export class Category {
  id?:string;
  namespace?:string;
  label?:string;
  hierarchy?:string;
  score?:number;
  frequency?:number;
  winner?:boolean;
  positions?:Position[];
  color?: string;
  percentage?: string;
  categoryBaseId?: String;
}
