"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./shadcn/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hyperLinkSchema, THyperLinkSchema } from "../schemas";
import { Input } from "./shadcn/input";
import { ColorPicker } from "./ColorPicker";
import { THyperLink } from "../types";
import { useCallback } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { Button } from "./shadcn/button";
import { ResponsiveDialog } from "./shadcn/responsive-dialog";
import { LucideTrash } from "lucide-react";
import { cn } from "../utils";
import { useStore } from "../hooks";

type TFormTitleProps = {
  hyperLink?: THyperLink;
};

const FormTitle: React.FC<TFormTitleProps> = ({ hyperLink }) => {
  return (
    <h1 className="font-bold mb-4">
      {hyperLink ? `Edit hyperlink ${hyperLink.title}` : "Create hyperlink"}
    </h1>
  );
};

type TDeleteHyperLinkProps = {
  hyperLink: THyperLink;
  handleBack: () => void;
};

const DeleteHyperLink: React.FC<TDeleteHyperLinkProps> = ({
  hyperLink,
  handleBack,
}) => {
  const deleteHyperLink = useStore((state) => state.deleteHyperLink);

  const onConfirm = useCallback(() => {
    deleteHyperLink(hyperLink.id);
    handleBack();
  }, [deleteHyperLink, handleBack, hyperLink.id]);

  return (
    <ResponsiveDialog
      onConfirm={onConfirm}
      title={`Delete hyperlink ${hyperLink?.title}?`}
      trigger={
        <Button variant="destructive" size="icon" className="size-9">
          <LucideTrash />
        </Button>
      }
    >
      This will delete hyperlink forever from your device.
    </ResponsiveDialog>
  );
};

type TProps = {
  hyperLink?: THyperLink;
};

export const EditCreateHyperLinkForm: React.FC<TProps> = ({ hyperLink }) => {
  const form = useForm<THyperLinkSchema>({
    resolver: zodResolver(hyperLinkSchema),
    defaultValues: {
      title: hyperLink?.title,
      color: hyperLink?.color ?? "red",
      link: hyperLink?.link,
    },
  });

  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push("/");
  }, [router]);

  const addHyperLink = useStore((state) => state.addHyperLink);
  const editHyperLink = useStore((state) => state.editHyperLink);

  const handleSubmit = useCallback(
    (form: THyperLinkSchema) => {
      if (hyperLink) {
        editHyperLink({
          ...form,
          id: hyperLink.id,
          createdAt: hyperLink.createdAt,
        });
      } else {
        addHyperLink({
          ...form,
          id: nanoid(),
          createdAt: new Date().valueOf(),
        });
      }

      handleBack();
    },
    [hyperLink, addHyperLink, editHyperLink, handleBack]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormTitle hyperLink={hyperLink} />
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <ColorPicker value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={cn("flex mt-4 items-center justify-end", {
            "justify-between": !!hyperLink,
          })}
        >
          {hyperLink ? (
            <DeleteHyperLink hyperLink={hyperLink} handleBack={handleBack} />
          ) : null}

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button" onClick={handleBack}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
