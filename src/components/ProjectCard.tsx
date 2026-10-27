import Image from "next/image";

export type Project = {
  folder: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  folder,
  title,
  description,
  stack,
  image,
  demoUrl,
  codeUrl,
}: Project) {
  return (
    <article className="border border-border rounded-xl overflow-hidden bg-[#0d1526] hover:border-accent transition-colors">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
        </div>

        <span className="text-xs text-muted">{folder}</span>
      </div>

      <div className="relative h-56 bg-accent/5">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-xs text-muted">
            [ {title} screenshot ]
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sub-text">{description}</p>
        <p className="text-xs text-muted">{stack.join(" · ")}</p>

        <div className="flex gap-4 text-sm">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-accent">
              live_demo →
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="text-muted">
              source_code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}