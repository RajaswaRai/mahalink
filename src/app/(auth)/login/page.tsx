"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [isResetFlow, setIsResetFlow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                <span
                  className="material-symbols-outlined text-primary-foreground text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  hub
                </span>
              </div>
              <span className="font-bold text-lg tracking-tight">Mahalink</span>
            </div>
            {!isResetFlow ? (
              <>
                <CardTitle className="text-xl">Welcome Back</CardTitle>
                <CardDescription>
                  Enter your credentials to manage organization resources.
                </CardDescription>
              </>
            ) : (
              <>
                <CardTitle className="text-xl">Recover Access</CardTitle>
                <CardDescription>
                  Provide your identifier to receive a recovery link.
                </CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            {!isResetFlow ? (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <Label htmlFor="identifier">Identifier</Label>
                  <Input
                    id="identifier"
                    placeholder="Student ID or Email"
                    type="text"
                    className="h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Passcode</Label>
                    <button
                      type="button"
                      onClick={() => setIsResetFlow(true)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Forgot Passcode?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      className="h-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-muted-foreground">
                    Remember me
                  </span>
                </label>

                <Button type="submit" size="lg" className="w-full">
                  Sign In
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <Label htmlFor="reset-identifier">Identifier</Label>
                  <Input
                    id="reset-identifier"
                    placeholder="Student ID or Email"
                    type="text"
                    className="h-10"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Recovery Link
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  className="w-full"
                  onClick={() => setIsResetFlow(false)}
                >
                  <span className="material-symbols-outlined text-[16px] mr-0.5">
                    arrow_back
                  </span>
                  Back to Sign In
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
