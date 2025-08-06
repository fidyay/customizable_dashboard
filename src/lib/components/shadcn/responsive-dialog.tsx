"use client";

import { useMediaQuery } from "@/lib/hooks";
import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { Button } from "./button";

type TProps = {
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  onConfirm: () => void;
};

export const ResponsiveDialog: React.FC<TProps> = ({
  title,
  description,
  trigger,
  children,
  onConfirm,
}) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description ? (
              <DialogDescription>{description}</DialogDescription>
            ) : null}
          </DialogHeader>
          {children}
          <DialogFooter className="flex items-center justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={onConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description ? (
            <DrawerDescription>{description}</DrawerDescription>
          ) : null}
        </DrawerHeader>
        <div className="px-4">{children}</div>
        <DrawerFooter className="pt-2">
          <Button onClick={onConfirm}>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
