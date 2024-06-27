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
import { Button } from "../ui/button";
import ThemeSwitcher from "../Control/ThemeSwitcher";
import { ArrowUpDoubleIcon } from "hugeicons-react";

export default function GoToTop() {
  const [position, setPosition] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setPosition(window.scrollY));
    setIsActive(position > 100);

    return () => window.removeEventListener("scroll", () => setPosition(0));
  }, [isActive, position]);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="right-6 bottom-3 z-50 fixed items-center md:flex md:space-x-2">
      {isActive && (
        <>
          <Button
            variant="outline"
            onClick={goToTop}
            className="rounded-full p-2 hover:bg-primary hover:text-black transition-colors duration-300"
          >
            <ArrowUpDoubleIcon className="w-6 h-6" />
          </Button>
          <div className="hidden md:block">
            <ThemeSwitcher variant="outline" />
          </div>
        </>
      )}
    </div>
  );
}
