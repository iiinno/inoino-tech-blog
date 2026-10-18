import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://iiinno.github.io/inoino-tech-blog/",
    title: "inoino Tech Blog",
    description: "inoino Tech Blog — 日々のこと、好きなもの、考えたことを綴る個人ブログ。",
    author: "iiinno",
    profile: "https://github.com/iiinno",
    ogImage: "og.png",
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
      url: "https://github.com/iiinno/inoino-tech-blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/iiinno/inoino-tech-blog" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
