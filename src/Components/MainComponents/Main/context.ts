import { createContext} from "react";
import { IProducts,IfetchProductsError } from "../../../types";

export const Context = createContext<null | IProducts | IfetchProductsError>(null)