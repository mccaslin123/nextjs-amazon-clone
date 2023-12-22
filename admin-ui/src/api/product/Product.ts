import { JsonValue } from "type-fest";

export type Product = {
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
