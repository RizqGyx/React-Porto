import React from "react";
import { useParams, Link } from "react-router-dom";
import PageTransition from "../motion/PageTransition";
import Chapter from "../components/ui/Chapter";
import WorkHero from "../components/work-detail/WorkHero";
import TextBlock from "../components/work-detail/TextBlock";
import Challenges from "../components/work-detail/Challenges";
import Process from "../components/work-detail/Process";
import Gallery from "../components/work-detail/Gallery";
import ProjectLinks from "../components/work-detail/ProjectLinks";
import NextProject from "../components/work-detail/NextProject";
import { getProjectBySlug, getAdjacentProjects } from "../data/projects";

function NotFound() {
  return (
    <PageTransition>
      <section className="shell flex min-h-[100svh] flex-col justify-center pt-28">
        <h1 className="font-display text-display font-bold text-ink">Project not found</h1>
        <Link to="/work" className="mt-6 text-sm font-semibold text-accent">
          ← Back to work
        </Link>
      </section>
    </PageTransition>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { next } = getAdjacentProjects(slug);

  if (!project) return <NotFound />;

  return (
    <PageTransition>
      <article>
        <WorkHero project={project} />

        <TextBlock index="01" label="Overview" title="What it is">
          {project.summary}
        </TextBlock>
        <TextBlock index="02" label="Problem" title="The challenge">
          {project.problem}
        </TextBlock>
        <TextBlock index="03" label="Solution" title="The approach">
          {project.solution}
        </TextBlock>
        <TextBlock index="04" label="Architecture" title="Under the hood">
          {project.architecture}
        </TextBlock>

        <section className="shell py-16">
          <Chapter index="05" label="Tech stack" className="mb-8" />
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-line/20 px-5 py-2 text-sm text-ink">
                {t}
              </span>
            ))}
          </div>
        </section>

        <Challenges index="06" items={project.challenges} />
        <Process index="07" steps={project.process} />
        <Gallery index="08" images={project.gallery} title={project.title} />

        {project.lessons?.length > 0 && (
          <TextBlock index="09" label="Lessons" title="What I took away">
            <ul className="space-y-3">
              {project.lessons.map((l, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </TextBlock>
        )}

        <ProjectLinks links={project.links} />
        <NextProject next={next} />
      </article>
    </PageTransition>
  );
}
