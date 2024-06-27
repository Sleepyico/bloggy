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

import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "Post",
  pattern: "**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(260),
    banner: s.string().max(99),
    tags: s.array(s.string()).optional(),
    related: s.array(s.string()).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    featured: s.boolean().optional(),
    indicatorsHidden: s.boolean().default(false),
    special: s.boolean().default(false),
    color: s.string().default("#a98fdb"),
    toc: s.toc(),
    metadata: s.metadata(),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "./src/content",
  output: {
    data: ".velite",
    assets: "public/blog",
    base: "/blogs/posts/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug as any,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
