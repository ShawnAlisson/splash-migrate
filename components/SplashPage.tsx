"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { IconArrowBadgeRightFilled } from "@tabler/icons-react";

export default function SplashPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const targetUrl = `https://bowora.com${pathname}${search ? `?${search}` : ""}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Blue diagonal overlay */}
      <div
        className="absolute inset-0 bg-blue-500"
        style={{
          clipPath: "polygon(55% 0%, 100% 0%, 100% 100%, 40% 100%)",
        }}
        aria-hidden="true"
      />

      {/* Middle icons between left + right */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:flex items-center justify-center">
        <div className="flex items-center -space-x-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <IconArrowBadgeRightFilled
              key={i}
              className="h-24 w-24 text-black icon-color-cycle"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>

      {/* Color animation, icons only */}
      <style jsx global>{`
        @keyframes iconColorCycle {
          0% {
            color: #3B82F6;
          }
          35% {
            color: #ffffff;
          }
          70% {
            color: #93C5FD;
          }
          100% {
            color: #3B82F6;
          }
        }
        .icon-color-cycle {
          animation: iconColorCycle 1.8s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left side */}
        <div className="flex items-center justify-center p-10 lg:p-16">
          <div className="max-w-md space-y-6 text-center">
            <div className="flex justify-center">
              <Image
                src="/logo.svg"
                alt="Best of Web"
                width={180}
                height={60}
                className="h-auto w-[380px] brightness-80 saturate-120"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center p-10 lg:p-16">
          <div className="relative max-w-md space-y-4 text-center text-neutral-200">
            <a
              href={targetUrl}
              rel="nofollow noopener noreferrer"
              className="mx-auto h-50 w-50 rounded-full flex items-center justify-center"
            >
              <Image
                src="/logo-bowora2.svg"
                alt="Bowora logo"
                width={64}
                height={64}
                className="h-50 w-50 invert brightness-10 saturate-0"
                priority
              />
            </a>

            <div className="space-y-2 mt-10 text-neutral-200">
              <h1 className="text-xl uppercase tracking-[0.28em] text-neutral-300">
                Best of Web is now{" "}
                <span className="font-semibold text-black tracking-[0.4em]">
                  Bowora
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 mt-12">
              <a
                href={targetUrl}
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto rounded-full px-6 py-3 text-base font-semibold text-neutral-800 bg-neutral-200 text-center"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
