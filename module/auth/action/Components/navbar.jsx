"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserRole } from "@/lib/generated/prisma/enums";

const Navbar = ({ userRole }) => {
  const { isSignedIn, isLoaded } = useUser();

  // ⛔ prevent hydration + loading issues
  if (!isLoaded) return null;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border rounded-2xl shadow-lg">
        <div className="px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={42} height={42} />
            <span className="font-bold text-2xl text-amber-300">
              LeetCode
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-4">
            <Link href="/problems">Problems</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            {isSignedIn ? (
              <>
                {/* ✅ ADMIN BUTTON */}
                {userRole === UserRole.ADMIN && (
                  <Link href="/create-problem">
                    <Button variant="outline">Create Problem</Button>
                  </Link>
                )}

                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="bg-amber-400 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;