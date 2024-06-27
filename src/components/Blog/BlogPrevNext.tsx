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
"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { getPosts } from "@/lib/posts";
import { Post } from "#site/content";
import { ArrowUpDoubleIcon } from "hugeicons-react";

export default function BlogPrevNext({ post }: Readonly<{ post: Post }>) {
  const posts = getPosts();
  const router = useRouter();

  const featuredPosts = posts.toSorted(
    (a, b) => (new Date(b.date) as any) - (new Date(a.date) as any)
  );
  const currentIndex = featuredPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="grid gap-x-4 gap-y-2 grid-cols-1 md:grid-cols-2">
      <Button
        onClick={() => {
          if (prevPost) {
            router.push(`/${prevPost?.slug}`);
          } else {
            router.push("/");
          }
        }}
        className="rounded-lg bg-primary/40 flex items-center space-x-2 py-7 justify-start group transition-colors duration-500"
      >
        <div className="flex items-center gap-2">
          <div className="-rotate-90">
            <ArrowUpDoubleIcon className="w-6 h-6 text-black/80 dark:text-white/80 dark:group-hover:text-black" />
          </div>
          <span className="text-black/80 dark:text-white/80 group-hover:text-black">
            {prevPost ? prevPost.title : "No New Post"}
          </span>
        </div>
      </Button>
      <Button
        onClick={() => {
          if (nextPost) {
            router.push(`/${nextPost?.slug}`);
          } else {
            router.push("/");
          }
        }}
        className="rounded-lg bg-primary/40 flex items-center space-x-2 py-7 justify-end group transition-colors duration-500"
      >
        <div className="flex items-center gap-2">
          <span className="text-black/80 dark:text-white/80 dark:group-hover:text-black">
            {nextPost ? nextPost.title : "No Old Post"}
          </span>
          <div className="rotate-90">
            <ArrowUpDoubleIcon className="w-6 h-6 text-black/80 dark:text-white/80 dark:group-hover:text-black" />
          </div>
        </div>
      </Button>
    </div>
  );
}
