import { JsonValue } from "type-fest";

export type Product = {
  createdAt: Date;
  description: JsonValue;
  id: string;
  title: string;
  updatedAt: Date;
};
