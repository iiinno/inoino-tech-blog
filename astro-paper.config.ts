import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://iiinno.github.io/journey-days/",
    title: "Journey-Days",
    description: "旅と日々の記録",
    author: "iiinno",
    profile: "https://github.com/iiinno",
    ogImage: "default-og.jpg",
    lang: "ja",
    timezone: "Asia/Tokyo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/iiinno/journey-days/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/iiinno/journey-days" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
