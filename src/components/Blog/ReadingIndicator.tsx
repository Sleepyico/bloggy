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

import React, { useEffect } from "react";

export default function ReadingIndicator() {
  const [getPercent, setGetPercent] = React.useState(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setGetPercent(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`rounded-md border border-primary/20 bg-gray-200 h-40 w-6 hidden relative md:block dark:bg-neutral-800 transition-all duration-150 ${
        getPercent <= 15 ? "opacity-0" : "opacity-100"
      }`}
      data-tooltip-content={`${
        getPercent === 100 ? `All post read!` : `Read ${getPercent}%`
      }`}
      data-tooltip-place="bottom"
    >
      <div
        className={`rounded-md inset-0 transition bottom-0 absolute ${
          getPercent === 100 && "bg-green-500"
        } ${getPercent < 100 && "bg-gray-300 dark:bg-neutral-600"}`}
        style={{ height: `${getPercent}%` }}
      ></div>
    </div>
  );
}
