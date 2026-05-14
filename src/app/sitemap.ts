import type { MetadataRoute } from "next";

const siteUrl = "https://www.finavia.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: siteUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
