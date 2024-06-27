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

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Post } from "#site/content";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowUpRight02Icon } from "hugeicons-react";
import { Skeleton } from "../ui/skeleton";
import { formatDate } from "@/lib/formatDate";
import { getPosts } from "@/lib/posts";

export default function AllPosts() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const featuredPosts: Post[] = posts.filter((post) => post.featured);
  const allPosts: Post[] = [
    ...featuredPosts.slice(3),
    ...posts.filter((post) => !post.featured),
  ];

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  useEffect(() => {
    const fetchData = () => {
      const posts = getPosts();
      setPosts(posts);
      setLoading(false);
    };
    fetchData();
  });

  if (filteredPosts.length === 0) return null;

  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <h2 className="text-3xl font-bold mb-2 md:mb-6">All Posts</h2>
        <Input
          placeholder="Search by tags, title or description..."
          className="max-w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {loading === true &&
          Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`loading`}
              className="flex flex-col space-x-0 border-b last pb-6 gap-2"
            >
              <Skeleton className="w-24 h-4" />
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-60 h-2" />
                <Skeleton className="w-60 h-2" />
                <Skeleton className="w-60 h-2" />
              </div>
            </div>
          ))}
        {loading === false &&
          filteredPosts.map((post, index) =>
            filteredPosts.length === 0 ? (
              <div key={`${post.title}-${index}`} className="">
                No posts found
              </div>
            ) : (
              <div
                key={`${post.title}-${index}`}
                className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4 border-b last pb-6 gap-4 md:gap-0"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold flex items-center hover:text-primary transition-colors duration-300 gap-1">
                    <Link href={`/${post.slug}`} prefetch={false}>
                      {post.title}
                    </Link>
                    <ArrowUpRight02Icon className="w-6 h-6" />
                  </h3>
                  <div className="text-black/60 font-semibold dark:text-primary/90">
                    {formatDate(post.date)}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    {post.description}
                  </p>
                </div>
                <div className="text-sm flex gap-1">
                  {post.tags?.map((tag, index) => (
                    <Badge
                      key={`${tag}-${index}`}
                      className={`bg-primary ${
                        tag.toLowerCase().includes(search.toLowerCase())
                          ? "bg-primary"
                          : "bg-muted"
                      } text-foreground dark:text-black`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
}
