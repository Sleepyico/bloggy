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

import BlogPrevNext from "@/components/Blog/BlogPrevNext";
import PostEnd from "@/components/Blog/PostEnd";
import GlobalLoading from "@/components/Extra/GlobalLoading";
import Separator from "@/components/Extra/Separator";
import { Mdx } from "@/components/Md/Mdx";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";
import { generatedMetadata, generatedViewport } from "@/lib/head";
import { getPost } from "@/lib/posts";
import {
  Calendar02Icon,
  EyeIcon,
  LegalDocument02Icon,
  Tag02Icon,
} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { removeHyphens } from "@/lib/removeHyphens";
import TableOfContents from "@/components/Blog/TableOfContents";
import Indicators from "@/components/Blog/Indicators";

const getData = async (slug: string) => {
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  return post;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getData(params.slug);
  return generatedMetadata({
    title: post.title,
    description: post.description,
    image: post.banner,
    card: "summary_large_image",
    keywords: post.tags,
  });
};

export const generateViewport = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getData(params.slug);
  return generatedViewport({ themeColor: post.color });
};

export default async function PostPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const post = await getData(params.slug);
  const isRelated =
    post.related?.length !== undefined && post.related.length > 0;

  return (
    <Suspense fallback={<GlobalLoading />}>
      <div className="pt-4 mt-10 dark:text-white/80 text-black/80 ">
        <article>
          <header className="space-y-8 leading-relaxed text-center mb-16">
            <Image
              src={post.banner}
              alt={post.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover object-top rounded-lg h-32 ring-1 ring-primary/30 hover:h-80 hover:object-center transition-all duration-1000"
            />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 dark:text-white/40 text-black/50 sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar02Icon className="w-4 h-4 text-black dark:text-primary" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag02Icon className="w-4 h-4 text-black dark:text-primary" />
                  <span className="capitalize">{post.tags?.join(" - ")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <EyeIcon className="w-4 h-4 text-black dark:text-primary" />
                  <span>{post.metadata.readingTime} minutes reading</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="block mx-auto md:w-11/12 sm:text-4xl text-2xl font-bold text-black dark:text-white">
                  {post.title}
                </h1>
                <p className="mx-auto text-black/50 dark:text-white/50 md:w-9/12">
                  {post.description}
                </p>
              </div>
            </div>
          </header>
          <div className="mt-4 dark:text-white/80 text-black/80">
            {!post.indicatorsHidden && <Indicators post={post} />}
            {post.toc?.length !== undefined && post.toc?.length > 0 && (
              <TableOfContents post={post} />
            )}
          </div>
          <Mdx code={post.body} />
        </article>

        <div className="mt-10 space-y-8">
          <Separator />
          <PostEnd />
          <Separator />
        </div>
        <div className="mt-6 space-y-5">
          {isRelated &&
            post.related?.map((post, index) => (
              <div className="space-y-2" key={`${post}-${index}`}>
                <h3 className="text-sm text-black/50 dark:text-white/30">
                  Similar Posts
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link href={`/${post}`}>
                    <Button className="flex space-x-2 py-7 justify-start bg-primary/40 group">
                      <LegalDocument02Icon className="w-4 h-4 text-black/80 dark:text-white/80 dark:group-hover:text-black" />
                      <span className="text-black/80 dark:text-white/80 group-hover:text-black capitalize">
                        {removeHyphens(post)}
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          <div className="space-y-2">
            <h3 className="text-sm text-black/50 dark:text-white/40">
              Continue Reading
            </h3>
            <BlogPrevNext post={post} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
