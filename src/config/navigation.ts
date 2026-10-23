import { BookOpen, Calendar, Dices, MessageCircle, Package, User, Users, type LucideIcon } from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Dices, isContentType: true },
  { key: "modes", path: "/modes", icon: Users, isContentType: true },
  { key: "characters", path: "/characters", icon: User, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
  { key: "release", path: "/release", icon: Calendar, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
