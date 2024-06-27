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

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Control/ThemeProvider";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import GoToTop from "@/components/Navigation/GoToTop";
import { generatedMetadata } from "@/lib/head";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generatedMetadata({
  title: "Bloggy",
  description:
    "Bloggy is a blogging platform built with Next.js and Tailwind CSS.",
  keywords: ["bloggy", "nextjs", "tailwindcss", "blog"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="responsive-screen min-h-screen pb-8">
            <Navbar />
            {children}
          </main>
          <Footer />
          <GoToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
