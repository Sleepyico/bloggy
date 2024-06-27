/*
 *   Copyright (c) 2024 Laith Alkhaddam aka Iconical or Sleepyico.
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import { Metadata, Viewport } from "next";

const defaultTitle = "Bloggy";
const defaultDescription =
  "Bloggy is a blogging platform built with Next.js and Tailwind CSS.";
const defaultUrl = process.env.NEXT_PUBLIC_URL ?? "https://blog.iconical.dev";
const defaultImage = "/logo.png";
const authorTwitter = "@sleepyiconical";

interface GeneratedMetadata {
  title?: string;
  description?: string;
  image?: string;
  card?: "summary" | "summary_large_image";
  keywords?: string[];
}

export async function generatedMetadata({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  card,
  keywords,
}: GeneratedMetadata): Promise<Metadata> {
  return {
    metadataBase: new URL(defaultUrl),
    title: {
      default: title,
      template: `%s | ${defaultTitle}`,
    },
    description: description,
    manifest: "/manifest.json",
    openGraph: {
      title: {
        default: title,
        template: `%s | ${defaultTitle}`,
      },
      description: description,
      images: [
        {
          url: image,
          type: "image/png",
          alt: title,
        },
      ],
      type: "website",
      url: new URL(defaultUrl),
      siteName: defaultTitle,
    },
    twitter: {
      card: card ?? "summary",
      title: {
        default: title,
        template: `%s | ${defaultTitle}`,
      },
      description: description,
      images: { url: image, type: "image/png" },
      creator: authorTwitter,
      site: authorTwitter,
    },
    keywords: keywords ?? [],
    authors: [
      {
        name: "Laith Alkhaddam aka Iconical",
        url: "https://github.com/sleepyico",
      },
    ],
    creator: "@sleepyico",
    publisher: "via @sleepyico",
    appleWebApp: {
      title: title,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/logo.png",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "32x32",
        url: "/favicon.ico",
      },
    ],
    alternates: {
      types: {
        "application/rss+xml": "/rss.xml",
      },
    },
  };
}
interface ViewportProps {
  themeColor: string;
}

export async function generatedViewport({
  themeColor = "#a98fdb",
}: ViewportProps): Promise<Viewport> {
  return {
    themeColor: themeColor,
    initialScale: 1,
    maximumScale: 1,
    width: "device-width",
    userScalable: false,
  };
}