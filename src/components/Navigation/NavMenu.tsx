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

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  BrowserIcon,
  DocumentCodeIcon,
  GithubIcon,
  Menu03Icon,
  RssConnected01Icon,
  TwitterIcon,
} from "hugeicons-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import { myLinks } from "@/constants/links";
import { getPosts } from "@/lib/posts";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const posts = getPosts();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "g") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Button
      onClick={() => setOpen((open) => !open)}
      variant={"ghost"}
      className="rounded-full p-2 hover:bg-primary hover:text-black transition-colors duration-300"
    >
      <Menu03Icon className="h-6 w-6" />
      <CommandDialog open={open}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Links">
            <CommandItem>
              <RssConnected01Icon className="w-4 h-4 mr-2" />
              <Link href="/rss.xml">RSS</Link>
            </CommandItem>
            <CommandItem>
              <TwitterIcon className="w-4 h-4 mr-2" />
              <Link href={myLinks.twitch}>Twitter</Link>
            </CommandItem>
            <CommandItem>
              <GithubIcon className="w-4 h-4 mr-2" />
              <Link href={myLinks.github}>Github</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="All Posts">
            {posts.map((post) => (
              <CommandItem key={`${post.title}`}>
                <DocumentCodeIcon className="w-4 h-4 mr-2" />
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Iconical - Developer and Designer">
            <CommandItem>
              <TwitterIcon className="w-4 h-4 mr-2" />
              <Link href={"https://twitter.com/sleepyiconical"}>Twitter</Link>
            </CommandItem>
            <CommandItem>
              <GithubIcon className="w-4 h-4 mr-2" />
              <Link href={"https://github.com/sleepyico"}>Github</Link>
            </CommandItem>
            <CommandItem>
              <BrowserIcon className="w-4 h-4 mr-2" />
              <Link href={"https://iconical.dev"}>Website</Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Button>
  );
}
