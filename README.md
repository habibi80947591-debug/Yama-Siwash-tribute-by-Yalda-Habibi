# Yama Siawash — Bilingual Tribute Website

A responsive React website honoring Afghan journalist and presenter Yama Siawash. It includes English/Dari language switching, carefully contrasted dark/light themes, a navy-blue visual identity, a responsive navigation menu, and a persistent Instagram shortcut.

## Run locally

1. Install Node.js (LTS).
2. Extract this ZIP and open the project folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed by Vite (usually `http://localhost:5173`).

To create a production build, run `npm run build`.

## Images and Instagram links

- `public/images/yama-siawash-portrait.jpg` is a cleaned crop of the photograph supplied in the conversation. It is used as the hero portrait, gallery image and subtle page background.
- The poem link opens the Instagram post supplied by the user: `https://www.instagram.com/p/CGiPi0Mpzuu/`.
- The persistent Instagram button opens `https://www.instagram.com/yamasiawash.official/`.

Instagram did not allow the linked post's media to be retrieved automatically during preparation. Therefore the supplied portrait is used for the hero as well. If you later provide the original image from that poem post, replace `public/images/yama-siawash-portrait.jpg` or update the hero/gallery image paths in `src/styles.css`.

## Content note

This is a tribute site, not an independently verified biography. Review biographical dates and descriptions against reliable sources before publishing. The poem itself is linked to the original Instagram post and is not reproduced on this website.
