import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number;
  images?: InputJsonValue;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
