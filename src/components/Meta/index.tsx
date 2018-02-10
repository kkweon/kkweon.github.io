import * as React from "react";
import Helmet from "react-helmet";

interface IMetaProp {
  title: string;
  tags: string;
  description: string;
  date?: string;
  modifiedDate?: string;
  image?: string;
}

export default function Meta({
  title,
  tags,
  description,
  date,
  modifiedDate,
  image,
}: IMetaProp) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="keywords" content={tags} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={process.env.SITEURL} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="article" />

      <meta name="article:section" content="Technology" />
      <meta name="article:published_time" content={date} />
      <meta name="article:author" content="Kyung Mo Kweon" />
      <meta name="article:tag" content={tags} />
      <meta name="article:modified_time" content={modifiedDate} />
    </Helmet>
  );
}
