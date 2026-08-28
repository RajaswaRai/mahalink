"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isResetFlow, setIsResetFlow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleFlow = () => {
    setIsResetFlow((prev) => !prev);
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface/80 backdrop-blur-md border-b border-border-subtle">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary cursor-pointer">
            menu
          </span>
          <div className="font-headline-md text-headline-md font-bold uppercase text-primary tracking-tight">
            Mahalink
          </div>
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          LOGIN
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-xl px-margin flex items-center justify-center relative z-10">
        <div className="w-full max-w-md relative">
          {!isResetFlow ? (
            /* Login Container */
            <div
              className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm p-md flex flex-col transition-all duration-300"
              id="login-container"
            >
              <div className="pb-md mb-md text-center">
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
                  Welcome Back
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Enter your credentials to manage organization resources.
                </p>
              </div>

              <form className="flex flex-col gap-sm flex-grow">
                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="username"
                  >
                    Identifier
                  </label>
                  <input
                    className="bg-surface border border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    id="username"
                    placeholder="Student ID or Email"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-xs relative">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="password"
                  >
                    Passcode
                  </label>
                  <input
                    className="bg-surface border border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors pr-12"
                    id="password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    className="absolute right-3 bottom-3 text-outline hover:text-on-surface transition-colors"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>

                <div className="flex justify-between items-center mt-xs">
                  <label className="flex items-center gap-xs cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface transition-colors"
                      type="checkbox"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-on-background transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                    onClick={toggleFlow}
                    type="button"
                  >
                    Forgot Passcode?
                  </button>
                </div>

                <button
                  className="mt-md w-full bg-primary text-on-primary rounded-lg py-sm font-label-caps text-label-caps uppercase hover:bg-primary/90 transition-colors flex justify-center items-center gap-sm group"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            /* Reset Container */
            <div
              className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm p-md flex flex-col transition-all duration-300"
              id="reset-container"
            >
              <div className="pb-md mb-md text-center relative">
                <button
                  className="absolute left-0 top-1 text-on-surface-variant hover:text-primary transition-colors flex items-center"
                  onClick={toggleFlow}
                  type="button"
                  aria-label="Back to login"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
                  Recover Access
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Provide your identifier to receive a recovery link.
                </p>
              </div>

              <form className="flex flex-col gap-sm flex-grow justify-center">
                <div className="flex flex-col gap-xs mb-sm">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="reset-username"
                  >
                    Identifier
                  </label>
                  <input
                    className="bg-surface border border-outline-variant rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    id="reset-username"
                    placeholder="Student ID or Email"
                    type="text"
                  />
                </div>
                <button
                  className="w-full bg-primary text-on-primary rounded-lg py-sm font-label-caps text-label-caps uppercase hover:bg-primary/90 transition-colors flex justify-center items-center gap-sm"
                  type="submit"
                >
                  Send Recovery Link
                </button>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-md px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface border-t border-border-subtle z-10 mt-auto">
        <div className="font-headline-md text-sm text-on-surface-variant tracking-tight font-bold">
          Mahalink System
        </div>
        <div className="flex gap-md font-label-caps text-label-caps">
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors uppercase"
            href="/support"
          >
            Support
          </Link>
        </div>
        <div className="text-on-surface-variant font-label-caps text-label-caps uppercase text-xs">
          ©{new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
