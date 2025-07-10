"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full pt-4 px-4">
      <div className="bg-white rounded-full shadow-[0_0_15px_rgba(59,130,246,0.15)] mx-auto max-w-7xl">
        <div className="px-6 sm:px-8">
          <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 relative">
              <Image
                src="/header.png"
                alt="Enos Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="https://gensource.vercel.app/auth/sign-in">
              <Button variant="ghost" size="default" className="border border-black px-6 py-2 font-sans font-normal">
                Sign in
              </Button>
            </Link>
            <Link href="https://gensource.vercel.app/auth/sign-up">
              <Button size="default" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 font-sans font-normal">
                Sign up
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
