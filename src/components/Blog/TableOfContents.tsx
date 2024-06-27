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

import { Post } from "#site/content";
import { ArrowUpDoubleIcon } from "hugeicons-react";
import React from "react";

export default function TableOfContents({ post }: Readonly<{ post: Post }>) {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div
      className="rounded-md flex flex-col space-y-2 mb-6
    text-gray-500 dark:text-neutral-500 select-none
    "
    >
      <button
        className="cursor-pointer flex font-medium space-x-1 text-sm transition-colors items-center"
        onClick={() => setToggled((prev) => !prev)}
      >
        <h1 className="uppercase dark:hover:text-neutral-300 hover:text-gray-700 duration-100">
          Table of Contents
        </h1>
        <div className={`${toggled ? "rotate-180" : ""} transition-transform`}>
          <ArrowUpDoubleIcon className="w-4 h-4" />
        </div>
      </button>
      {toggled && (
        <ol
          className={`flex flex-col gap-2 list-decimal transition-all duration-5000 ease-in-out ${
            toggled ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          {post.toc?.map((item, index) => (
            <li key={`${index}-${item.title}`} className="ml-5 ">
              <span>
                <a
                  href={item.url}
                  className="dark:hover:text-neutral-300 hover:text-gray-700"
                >
                  {item.title}
                </a>
                <ol className="flex flex-col gap-1 list-disc">
                  {item.items?.length > 0 &&
                    item.items?.map((subItem, index) => (
                      <li key={`${index}-${subItem.title}`} className="ml-4">
                        <a
                          href={subItem.url}
                          className="dark:hover:text-neutral-300 hover:text-gray-700"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                </ol>
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}