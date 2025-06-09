import type { iconPaths } from "./IconPaths";

/** Social media */
export const socialLinks: Record<
  string,
  { label: string; href: string; icon: keyof typeof iconPaths; color: string }
> = {
  youtube: {
    label: "YouTube",
    href: "https://www.youtube.com/@Duisterethomas/",
    icon: "youtube-logo",
    color: "#FF0000",
  },
  soundcloud: {
    label: "SoundCloud",
    href: "https://soundcloud.com/duisterethomas",
    icon: "soundcloud-logo",
    color: "#FF5500",
  },
  modrinth: {
    label: "Modrinth",
    href: "https://www.modrinth.com/user/duisterethomas",
    icon: "modrinth-logo",
    color: "#00AF5C",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/duisterethomas",
    icon: "github-logo",
    color: "#FFFFFF",
  },
  itchio: {
    label: "Itch.io",
    href: "https://duisterethomas.itch.io/",
    icon: "itch.io-logo",
    color: "#FA5C5C",
  },
  gamejolt: {
    label: "Game Jolt",
    href: "https://gamejolt.com/@duisterethomas",
    icon: "gamejolt-logo",
    color: "#CCFF00",
  },
  twitch: {
    label: "Twitch",
    href: "https://www.twitch.tv/duisterethomas",
    icon: "twitch-logo",
    color: "#9146FF",
  },
  reddit: {
    label: "Reddit",
    href: "https://www.reddit.com/r/duisterethomas/",
    icon: "reddit-logo",
    color: "#FF4500",
  },
};