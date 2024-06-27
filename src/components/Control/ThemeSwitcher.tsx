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

import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";

export default function ThemeSwitcher({
  variant = "ghost",
}: Readonly<{
  variant?: "ghost" | "outline";
}>) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant={variant}
      onClick={toggleTheme}
      className="rounded-full p-2 hover:bg-primary hover:text-black transition-colors duration-300"
    >
      {theme === "light" ? <Sun02Icon /> : <Moon02Icon />}
    </Button>
  );
}
