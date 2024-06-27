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

import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blog.iconical.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: defaultUrl,
      lastModified: new Date(),
    },
  ];

  const posts = getPosts();
  posts.forEach((post) => {
    links.push({
      url: `${defaultUrl}/${post.slug}`,
      lastModified: new Date(post.date),
    });
  });

  return links;
}
