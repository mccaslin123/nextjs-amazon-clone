import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  description?: JsonFilter;
  id?: StringFilter;
  title?: StringFilter;
};
