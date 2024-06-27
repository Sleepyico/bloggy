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

import Image from "next/image";

export default function GlobalLoading({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="absolute right-0 left-0 bottom-0 top-0 max-h-full w-full flex items-centers justify-center">
        <div className="flex max-h-full w-full items-centers justify-around">
          {children}
          <Image
            src="/images/pusheen.gif"
            alt="Loading"
            width={464}
            height={475}
            className="mx-auto my-auto h-60 w-60"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
