import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landingpages Layout",
  description: "Generated by create next app",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="flex-grow">
      <div className="flex h-full">
        <div className="w-1/2 flex items-center justify-center">
          logo
        </div>
        <div className="w-1/2 flex items-center justify-center bg-red-600 text-white">
          {children}
        </div>
      </div>
    </main>
  );
}