import { signIn } from "next-auth/react";

export const siteConfig = {
  name: "spotify-playlist-to",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "The Best Transfer Spotify Playlist To Any Music Streaming Service. Your favorite playlists in one place.",
  links: {
    home: "/",
    signIn: "/api/auth/signin",
    twitter: "https://twitter.com/LauraMaraC40352",
    github: "https://github.com/LauraCastrillonMp/spotify-playlist-to",
  },
};

export type SiteConfig = typeof siteConfig;
