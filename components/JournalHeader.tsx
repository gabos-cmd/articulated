import { SpotSun } from "@/components/illustrations";
import { PageHeader } from "@/components/PageHeader";

export function JournalHeader() {
  return (
    <PageHeader
      eyebrow="Kept in your browser"
      title={
        <>
          Your <em className="italic">journal</em>
        </>
      }
      intro="What you've looked at, what you've kept, and what stuck. A small record of slow looking."
      art={<SpotSun className="h-32 w-32 sm:h-40 sm:w-40" />}
      tint="var(--color-moss)"
    />
  );
}
