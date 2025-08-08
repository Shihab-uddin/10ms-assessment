import Head from "next/head";

type SEOProps = {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    defaultMeta?: {
      meta_name?: string;
      value?: string;
      content?: string;
    }[];
    schema?: {
      meta_value?: string;
    }[];
  };
};

export default function SEOHead({ seo }: SEOProps) {
  if (!seo) return null;

  return (
    <Head>
      {/* Title & Description */}
      {seo.title && <title>{seo.title}</title>}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Extra meta tags */}
      {seo.defaultMeta?.map((meta, idx) => {
        if (meta.meta_name) {
          return <meta key={idx} name={meta.meta_name} content={meta.content} />;
        }
        if (meta.value?.startsWith("og:")) {
          return <meta key={idx} property={meta.value} content={meta.content} />;
        }
        if (meta.value?.startsWith("twitter:")) {
          return <meta key={idx} name={meta.value} content={meta.content} />;
        }
        return null;
      })}

      {/* JSON-LD Schema */}
      {seo.schema?.map((schemaItem, idx) =>
        schemaItem.meta_value ? (
          <script
            key={`schema-${idx}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaItem.meta_value }}
          />
        ) : null
      )}
    </Head>
  );
}
