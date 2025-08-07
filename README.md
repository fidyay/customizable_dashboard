# Customizable dashboard

I used these technologies: Next.js, Shadcn/ui, Tailwind, Zustand(for state management and synchronization with local storage), Zod for validation. Hyperlinks are saved on user's device via local storage.

It has 3 pages:

1. Hyperlinks view. Route: /
2. Create new hyperlink page. If user already has max amount of hyperlinks he will be automatically redirected to the Hyperlinks view. Route: /hyperlink
3. Edit hyperlink page. Here user may edit and create existing hyperlink. This page determines which hyperlink to manage by provided id as a param at the page url. If user does not have hyperlink with the provided id or id is invalid he will be automatically redirected to the Hyperlinks view. Route: /hyperlink/[hyperlinkId]

[Demo link](https://customizable-dashboard-eight.vercel.app/)
