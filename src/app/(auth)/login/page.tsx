"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleGoogleLogin() {
    setIsLoading(true);
    setErrorMessage(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error || !data.url) {
      setErrorMessage(error?.message ?? "Unable to start Google sign-in.");
      setIsLoading(false);
      return;
    }

    window.location.assign(data.url);
  }

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
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in with Google to manage organization resources.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <Button
              type="button"
              size="lg"
              className="w-full"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <span className="text-base font-bold" aria-hidden="true">
                G
              </span>
              {isLoading ? "Connecting..." : "Continue with Google"}
            </Button>
            {errorMessage && (
              <p role="alert" className="text-sm text-destructive text-center">
                {errorMessage}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
