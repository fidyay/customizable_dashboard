import { appBgColors } from "../utils";

type TAppColorObj = typeof appBgColors;

export type TAppColor = keyof TAppColorObj;
export type TAppTailwindColor = TAppColorObj[TAppColor];
