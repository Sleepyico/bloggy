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
import PostEndLink from "./PostEndLink";

export default function PostEnd() {
  return (
    <div className="space-y-2 text-m dark:text-white/70 text-black/60 flex flex-col">
      <span>Thanks for reading 💜</span>
      <span>
        If you found the blog helpful; you could always support me via{" "}
        <PostEndLink href={myLinks.kofi} text="Ko-Fi" /> or check out{" "}
        <PostEndLink href={"https://iconical.dev/donate"} text="Iconical/donate" />
      </span>
    </div>
  );
}
