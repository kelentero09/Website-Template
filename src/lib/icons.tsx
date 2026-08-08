import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Boxes,
  Briefcase,
  Clock,
  Headphones,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

// Map human-readable config icon names to Lucide components.
// Add entries here if you want to use additional icons in the business config.
export const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Boxes,
  Briefcase,
  Clock,
  Headphones,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Wrench,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Store;
}