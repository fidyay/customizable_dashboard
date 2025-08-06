import { appColors } from "../utils";

type TAppColorObj = typeof appColors;

export type TAppColor = keyof TAppColorObj;
export type TAppTailwindColor = TAppColorObj[TAppColor];
