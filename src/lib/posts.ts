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

import { posts as allPosts, type Post } from "#site/content";

export function getPosts() {
  const posts: Post[] = allPosts;
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts: Post[] = getPosts();
  return posts.find((post: Post) => post.slug === slug);
}
