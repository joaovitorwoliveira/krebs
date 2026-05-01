import type { BlogPostFAQ } from "../types";

interface BlogPostFAQSectionProps {
  items: BlogPostFAQ[];
  title: string;
}

export default function BlogPostFAQSection({
  items,
  title,
}: BlogPostFAQSectionProps) {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="font-encode-bold text-dark text-2xl md:text-3xl mb-4">
        {title}
      </h2>

      <div className="flex flex-col">
        {items.map((item) => {
          const id = `faq-${item.id}`;
          return (
            <div key={item.id} className="group border-b border-dark/20">
              <input type="checkbox" id={id} className="sr-only" />
              <label
                htmlFor={id}
                className="cursor-pointer flex items-center justify-between text-left py-5 select-none"
              >
                <span className="text-base md:text-lg font-inter-bold font-normal text-dark/80 group-has-[:checked]:font-bold group-has-[:checked]:text-dark transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  {item.question}
                </span>

                <span className="flex-shrink-0 ml-3 inline-flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-has-[:checked]:rotate-180">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-dark/50 group-has-[:checked]:text-dark transition-colors duration-300 ease-out"
                    />
                  </svg>
                </span>
              </label>

              <div className="grid grid-rows-[0fr] opacity-0 group-has-[:checked]:grid-rows-[1fr] group-has-[:checked]:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="overflow-hidden">
                  <div className="pb-5 pt-1">
                    <p className="font-inter text-base text-dark/70 leading-[1.7] whitespace-pre-wrap">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
