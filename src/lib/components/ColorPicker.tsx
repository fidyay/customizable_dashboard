"use client";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { Button } from "./shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./shadcn/command";
import React from "react";
import { appBgColors, capitalize, cn } from "../utils";
import { TAppColor, TAppTailwindColor } from "../types";

type TColorDotProps = {
  color: TAppTailwindColor;
};

const ColorDot: React.FC<TColorDotProps> = ({ color }) => {
  return <div className={`h-2 w-2 rounded-full ${color}`} />;
};

type TProps = {
  value: TAppColor;
  onChange: (val: TAppColor) => void;
};

export const ColorPicker: React.FC<TProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2">
            {value ? <ColorDot color={appBgColors[value]} /> : null}
            {value ? capitalize(value) : "Select color..."}
          </div>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search color..." />
          <CommandList>
            <CommandEmpty>No color found.</CommandEmpty>
            <CommandGroup>
              {Object.entries(appBgColors).map(([currentValue, style]) => {
                return (
                  <CommandItem
                    key={currentValue}
                    value={currentValue}
                    className="cursor-pointer"
                    onSelect={(value) => {
                      onChange(value as TAppColor);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <ColorDot color={style} />
                        {capitalize(currentValue)}
                      </div>
                      <CheckIcon
                        className={cn(
                          "h-4 w-4",
                          currentValue === value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
