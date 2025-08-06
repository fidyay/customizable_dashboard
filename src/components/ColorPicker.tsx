import { TAppColor, TAppTailwindColor } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn/select";
import { appColors, capitalize } from "@/lib/utils";

type TColorDotProps = {
  color: TAppTailwindColor;
};

const ColorDot: React.FC<TColorDotProps> = ({ color }) => {
  return <div className={`h-5 w-5 rounded-full bg-${color}`} />;
};

type TProps = {
  value: TAppColor;
  onChange: (val: TAppColor) => void;
};

export const ColorPicker: React.FC<TProps> = ({ value, onChange }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(appColors).map(([value, style]) => {
          return (
            <SelectItem
              className="flex items-center gap-1"
              key={value}
              value={value}
            >
              <ColorDot color={style} /> {capitalize(value)}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
