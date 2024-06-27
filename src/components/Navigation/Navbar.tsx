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

import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../Control/ThemeSwitcher";
import { useTheme } from "next-themes";
import NavMenu from "./NavMenu";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { theme } = useTheme();
  const router = useRouter();

  const getPathLink = () => {
    return "/";
  };

  return (
    <nav className="max-h-10 flex items-center justify-between py-10">
      <button onClick={() => router.push(getPathLink())} className="">
        <Image
          src={theme === "light" ? "/logo.svg" : "/logo-dark.svg"}
          alt="Bloggy Logo"
          width={250}
          height={250}
          className="h-16 w-16"
        />
      </button>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <NavMenu />
      </div>
    </nav>
  );
}
