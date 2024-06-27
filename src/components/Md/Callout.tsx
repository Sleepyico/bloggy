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

import { cn } from "@/lib/utils";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "note";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: Readonly<CalloutProps>) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border border-l-4 p-4 bg-primary/50 dark:bg-[#1b1b1b]",
        {
          "border-red-600": type === "danger",
          "border-yellow-600": type === "warning",
          "border-green-600": type === "note",
        }
      )}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
