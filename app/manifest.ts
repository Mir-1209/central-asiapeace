import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F2EA",
    theme_color: "#0F7DAD",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
