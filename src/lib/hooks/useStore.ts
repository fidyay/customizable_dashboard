"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { THyperLink } from "../types";
import { MAX_TOTAL_HYPERLINKS } from "../utils";

type TState = {
  hyperLinks: Record<string, THyperLink>;
  addHyperLink: (link: THyperLink) => void;
  editHyperLink: (link: THyperLink) => void;
  deleteHyperLink: (linkId: THyperLink["id"]) => void;
};

export const useStore = create<TState>()(
  persist(
    (set) => ({
      hyperLinks: {},
      addHyperLink(link) {
        set((state) => {
          const hyperLinks = state.hyperLinks;

          if (Object.keys(hyperLinks).length >= MAX_TOTAL_HYPERLINKS) {
            throw new Error(
              `Cannot add more than ${MAX_TOTAL_HYPERLINKS} hyperlinks`
            );
          }
          return {
            hyperLinks: { ...hyperLinks, [link.id]: link },
          };
        });
      },
      editHyperLink(link) {
        set((state) => ({
          hyperLinks: { ...state.hyperLinks, [link.id]: link },
        }));
      },
      deleteHyperLink(linkId) {
        set((state) => {
          delete state.hyperLinks[linkId];
          return state;
        });
      },
    }),
    {
      name: "hyperLinks-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
