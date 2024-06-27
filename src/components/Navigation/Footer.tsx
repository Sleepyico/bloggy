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

import React from "react";
import { myLinks } from "@/constants/links";
import Link from "next/link";

export default function Footer() {
  const currYear = new Date().getFullYear();

  const getFooterText = () => {
    return `© 2019-${currYear} Laith`;
  };

  return (
    <div className="bg-gray-100 text-sm w-full py-4 dark:bg-primary/50 text-black/90 dark:text-white/80">
      <div className="responsive-screen">
        <div className="space-y-4 text-center sm:space-y-0 sm:space-x-1 sm:text-left md:flex">
          <Link
            href={`${myLinks.github}/bloggy`}
            target="_blank"
            className="text-center  hover:border-b  transition-colors"
          >
            This website is open-source on GitHub
          </Link>
          <p className="inline-flex mx-1">|</p>
          <Link
            href={myLinks.github}
            target="_blank"
            className="text-center  hover:border-b  transition-colors"
          >
            {getFooterText()}
          </Link>
        </div>
      </div>
    </div>
  );
}
