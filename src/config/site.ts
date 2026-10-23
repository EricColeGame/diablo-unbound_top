export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  gamefoundUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Diablo Unbound Wiki",
  shortName: "Diablo Unbound",
  logoText: "D",
  tagline: "Classes, Dungeons, Loot & Gamefound Updates",
  description: "Explore Diablo Unbound, an officially licensed cooperative tabletop dungeon battler for 1–4 players. Learn classes, loot, bosses, and Gamefound news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://diablo-unbound.top",
  supportEmail: "support@diablo-unbound.top",
  gameUrl: "https://glasscannonunplugged.com/diablo-unbound/",
  gamefoundUrl: "https://gamefound.com/en/projects/glass-cannon-unplugged/diablo-unbound",
  heroVideoId: "EIWNL6ioZXs",
  social: {
    discord: "https://discord.com/invite/Gavkv9GeJW",
    youtube: "https://www.youtube.com/@GlassCannonUnplugged",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
