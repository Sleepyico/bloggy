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
import { useRouter } from "next/navigation";
import {
  CheckmarkCircle02Icon,
  Link05Icon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "hugeicons-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type ShareType = "twitter" | "telegram" | "whatsapp" | "link";

export default function Share({ title }: Readonly<{ title: string }>) {
  const [copied, setCopied] = React.useState(false);
  const router = useRouter();
  const share = (option: ShareType) => {
    switch (option) {
      case "twitter":
        return `https://twitter.com/intent/tweet?via=sleepyiconical&text=${encodeURIComponent(
          title + "\n" + location.href
        )}`;
      case "telegram":
        return `https://telegram.me/share/url?url=${encodeURIComponent(
          location.href
        )}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(
          title + "\n" + location.href
        )}`;
      case "link":
        return `${location.href}`;
    }
  };

  const handleClick = (option: ShareType) => {
    if (option === "link") {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(share(option));
        toast.success(`${option} copied to clipboard.`);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    }
    router.push(share(option));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        onClick={() => handleClick("twitter")}
        className="rounded-full p-5 bg-primary/40"
      >
        <TwitterIcon className="h-6 w-6 text-black dark:text-white/90" />
      </Button>
      <Button
        onClick={() => handleClick("telegram")}
        className="rounded-full p-5 bg-primary/40"
      >
        <TelegramIcon className="h-6 w-6 text-black dark:text-white/90" />
      </Button>
      <Button
        onClick={() => handleClick("whatsapp")}
        className="rounded-full p-5 bg-primary/40"
      >
        <WhatsappIcon className="h-6 w-6 text-black dark:text-white/90" />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleClick("link");
        }}
        className="rounded-full p-5 bg-primary/40"
      >
        {copied ? (
          <CheckmarkCircle02Icon className="h-[22px] w-[22px] text-green-400" />
        ) : (
          <Link05Icon className="h-6 w-6 text-black dark:text-white/90" />
        )}
      </Button>
    </div>
  );
}
