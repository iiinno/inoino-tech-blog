import type { UIStrings } from "../types";

export default {
  nav: {
    home: "ホーム",
    posts: "記事",
    tags: "タグ",
    about: "About",
    archives: "アーカイブ",
    search: "検索",
  },
  post: {
    publishedAt: "公開日",
    updatedAt: "更新日",
    sharePostIntro: "この記事をシェア:",
    sharePostOn: "{{platform}} でシェア",
    sharePostViaEmail: "メールでシェア",
    tagLabel: "タグ",
    backToTop: "トップへ戻る",
    goBack: "戻る",
    editPage: "このページを編集",
    previousPost: "前の記事",
    nextPost: "次の記事",
  },
  pagination: {
    prev: "前へ",
    next: "次へ",
    page: "ページ",
  },
  home: {
    socialLinks: "SNS リンク",
    featured: "注目の記事",
    recentPosts: "最近の記事",
    allPosts: "すべての記事",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "タグ",
    tagDesc: "このタグの付いた記事一覧",

    tagsTitle: "タグ",
    tagsDesc: "使用されているタグの一覧",

    postsTitle: "記事",
    postsDesc: "投稿した記事の一覧",

    archivesTitle: "アーカイブ",
    archivesDesc: "過去の記事一覧",

    searchTitle: "検索",
    searchDesc: "記事を検索 ...",
  },
  a11y: {
    skipToContent: "本文へスキップ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    toggleTheme: "テーマを切り替える",
    searchPlaceholder: "記事を検索...",
    noResults: "見つかりませんでした",
    goToPreviousPage: "前のページへ",
    goToNextPage: "次のページへ",
  },
  notFound: {
    title: "404 Not Found",
    message: "ページが見つかりません",
    goHome: "ホームへ戻る",
  },
} satisfies UIStrings;
