import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      <main className="md:pt-0 pb-20 md:pb-0 min-h-screen bg-background">
        <div className="md:p-xl max-w-7xl mx-auto">
          <header className="mb-xl pb-md border-b border-border-subtle flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
            <div>
              <h2 className="font-label-caps text-label-caps text-primary uppercase mb-base tracking-widest">
                Department News
              </h2>
              <h1 className="font-headline-xl text-headline-xl text-on-background">
                The Campus Blog
              </h1>
            </div>
            <div className="flex gap-sm">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps uppercase px-md py-sm rounded hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
              <button className="bg-surface text-on-surface font-label-caps text-label-caps uppercase px-md py-sm border border-border-subtle rounded hover:bg-surface-container-low transition-colors flex items-center">
                <span className="material-symbols-outlined mr-xs">search</span>{" "}
                Search
              </button>
            </div>
          </header>

          <section className="mb-xl">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-lg group cursor-pointer">
              <div className="lg:col-span-8 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover aspect-4/3 lg:aspect-auto hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtSVWbOZe3INP1gUt7PQNzmpez3bKuetYndWNSHFDAAU4uDb0D8_10xHIHk0585ogJGXq2BgNHaBP4cy6iWn0WBZhV1dyDdHrC8TsCtK_ILTrNoCRXKa606ytQdWk_baqLxN8Xks6165z-UvKaT9myrhVspBGyrUkJXD1P_PXHi9BlYEEO5APgtJmXmaFbAsXuk4-0is8eocbfu1eLb2jeeGZ7cwXYb-5MoBBnpYCDALqZxEf_AqNUjw"
                />
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center py-md lg:py-xl">
                <div>
                  <div className="flex justify-between items-center mb-md">
                    <span className="text-secondary font-label-caps text-label-caps uppercase tracking-widest">
                      Architecture
                    </span>
                    <span className="font-label-caps text-label-caps text-outline">
                      OCT 24
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-md group-hover:text-primary transition-colors">
                    Deconstructing the New Student Union Building
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg line-clamp-4">
                    An analysis of the brutalist influences and geometric forms
                    defining the campus's newest architectural marvel, focusing
                    on form following function in student spaces.
                  </p>
                </div>
                <div className="flex items-center text-primary font-label-caps text-label-caps uppercase mt-auto">
                  <span className="mr-sm">Read Article</span>
                  <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      <nav className="md:hidden bg-surface dark:bg-inverse-surface text-on-surface-variant dark:text-inverse-on-surface docked full-width border-t border-border-subtle fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch">
        <a
          className="flex flex-col items-center justify-center h-full px-4 hover:bg-surface-container-highest transition-colors w-full"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-label-caps text-[10px] uppercase">Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center h-full px-4 hover:bg-surface-container-highest transition-colors w-full"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">payments</span>
          <span className="font-label-caps text-[10px] uppercase">Finance</span>
        </a>
        <a
          className="flex flex-col items-center justify-center h-full px-4 hover:bg-surface-container-highest transition-colors w-full"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">event</span>
          <span className="font-label-caps text-[10px] uppercase">Events</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-primary h-full px-4 hover:bg-surface-container-highest transition-colors w-full"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">description</span>
          <span className="font-label-caps text-[10px] uppercase">Docs</span>
        </a>
        <a
          className="flex flex-col items-center justify-center h-full px-4 hover:bg-surface-container-highest transition-colors w-full"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-label-caps text-[10px] uppercase">Me</span>
        </a>
      </nav>
    </div>
  );
}
