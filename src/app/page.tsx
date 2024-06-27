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

import { posts, type Post } from "#site/content";
import AllPosts from "@/components/Blog/AllPosts";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredPosts: Post[] = posts.filter((post) => post.featured);
  return (
    <main className="mx-auto px-4 py-6 md:px-6 md:py-10">
      {featuredPosts.length !== 0 && (
        <section className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Link
              key={`${featuredPosts[0].title}`}
              href={`/${featuredPosts[0].slug}`}
              prefetch={false}
              className="relative overflow-hidden rounded-lg
            shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out col-span-3"
            >
              <Image
                src={featuredPosts[0].banner}
                alt={featuredPosts[0].title}
                width={800}
                height={500}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 dark:from-primary/70 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white dark:text-primary-foreground">
                    {featuredPosts[0].title}
                  </h3>
                  <span className="font-semibold">{formatDate(featuredPosts[0].date)}</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredPosts.slice(1).map(
              (post, index) =>
                index < 2 && (
                  <Link
                    key={`${post.title}-${index}`}
                    href={`/${post.slug}`}
                    prefetch={false}
                    className="relative overflow-hidden rounded-lg
                    shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                  >
                    <Image
                      src={post.banner}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 dark:from-primary/70 to-transparent" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-white dark:text-primary-foreground">
                          {post.title}
                        </h3>
                        <span className="font-semibold">{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </section>
      )}
      <AllPosts />
    </main>
  );
}
