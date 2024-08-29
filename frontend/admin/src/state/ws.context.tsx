import { type Context, createContext, useContext } from "react";

export const WSContext: Context<any> = createContext<any>(null);

export const useWSContext = () => useContext(WSContext);
