import React from "react";
import SEO from "@/components/SEO";
import { LoginPageTextsSEO } from "@/components/SEO/seoTexts";

export default function Home() {
  return (
    <div>
      <SEO
        title={LoginPageTextsSEO.title}
        description={LoginPageTextsSEO.description}
        keywords={LoginPageTextsSEO.keywords}
        author={LoginPageTextsSEO.author}
        url={LoginPageTextsSEO.url}
        image={LoginPageTextsSEO.image}
      />

      <h1>home page</h1>
    </div>
  );
}
