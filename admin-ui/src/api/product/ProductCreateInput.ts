import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  colors: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice: number;
  images: InputJsonValue;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
