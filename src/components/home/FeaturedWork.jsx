import React from "react";
import { Link } from "react-router-dom";
import Chapter from "../ui/Chapter";
import StackedCard from "./StackedCard";
import { projects } from "../../data/projects";

const featured = projects.slice(0, 3);

export default function FeaturedWork() {
  return (
    <section className="shell py-24">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <Chapter index="01" label="Selected" />
          <h2 className="mt-4 font-display text-display font-bold text-ink">Recent work</h2>
        </div>
        <Link
          to="/work"
          data-cursor
          className="hidden text-sm font-semibold text-ink underline-offset-4 hover:text-accent hover:underline md:block"
        >
          All projects →
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {featured.map((p, i) => (
          <StackedCard key={p.slug} project={p} index={i} total={featured.length} />
        ))}
      </div>
    </section>
  );
}
