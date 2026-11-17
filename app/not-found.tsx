import Link from "next/link";

import { SpotFrame } from "@/components/illustrations";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-28 text-center">
      <SpotFrame className="h-32 w-36" />
      <h1 className="display mt-6 text-[3rem]">An empty frame</h1>
      <p className="mt-3 text-ink-2">This page isn&rsquo;t hanging anywhere. Perhaps it was moved to storage.</p>
      <Link href="/" className="btn btn-ink mt-8">
        Back to today&rsquo;s artwork
      </Link>
    </main>
  );
}
