import { getAllProducts } from "@/lib/api";

export default async function sitemap() {
  const products = await getAllProducts();

  const productUrls = products.map((product) => ({
    url: `https://nivoraliving.co/shop/${product.fields.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://nivoraliving.co",
      lastModified: new Date(),
    },
    {
      url: "https://nivoraliving.co/shop",
      lastModified: new Date(),
    },
    {
      url: "https://nivoraliving.co/about",
      lastModified: new Date(),
    },
    {
      url: "https://nivoraliving.co/contact",
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}