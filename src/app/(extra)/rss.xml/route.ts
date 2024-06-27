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

import { posts } from "#site/content";
import RSS from "rss"

const site_url =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blog.iconical.dev";

const feed = new RSS({
  title: "Blog posts | Iconical",
  description: "A blog about programming, game development and design.",
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  language: "en",
  copyright: `All rights reserved ${new Date().getFullYear()}`,
});

posts.map((post) => {
  feed.item({
    title: post.title,
    guid: `${site_url}/${post.slug}`,
    url: `${site_url}/${post.slug}`,
    date: post.date,
    description: post.description || "",
    author: "Laith aka Iconical",
    categories: post.tags || [],
  });
});

export async function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
