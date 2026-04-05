import { FooterSignature } from "@/components/FooterSignature";
import { SiteNav } from "@/components/SiteNav";

export default function AboutPage() {
  return (
    <main className="museum-shell min-h-screen bg-white px-5 pb-24 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <SiteNav />

        <section className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(246,246,245,0.82))] px-6 py-10 shadow-[0_22px_60px_rgba(17,17,17,0.06)] sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-black/[0.04] blur-[110px]" />
            <div className="relative max-w-3xl space-y-8 text-[17px] leading-8 text-black/76">
              <p>Hello dear user,</p>
              <p>
                Articulated is a simple web page projected I’ve fully built
                myself with the help of AI tools. I’ve always wanted to become
                more knowledgable about great artworks and the history behind
                them so i built an app to help me do so in a seamless way. With
                this little concept I came up with of “One artwork a day” you
                get to dive into the story behind great pantings throughout time
                and become a bit smarter in regards to art in a few minutes
                daily.
              </p>
              <p>
                Thanks for taking the time to browse this little corner of the
                internet which i built.
              </p>
              <p>Gabriel</p>
            </div>
          </div>
        </section>

        <FooterSignature className="mt-16" />
      </div>
    </main>
  );
}
