import React, { useEffect, useState } from "react";
import {
  X,
  Link as LinkIcon,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function ProjectModal({ project, onClose, projectImageMap }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const localImageKeys =
    project?.imageKeys ||
    project?.typeSpecific?.branding?.mockupKeys ||
    project?.typeSpecific?.illustration?.processImageKeys ||
    [];

  const externalImageUrls = project?.images || [];

  const carouselImages = [
    ...localImageKeys.map((key) => projectImageMap[key]),
    ...externalImageUrls,
  ];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, project]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    if (!carouselImages.length) return;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length,
    );
  };

  const prevImage = () => {
    if (!carouselImages.length) return;
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border-[3px] border-black bg-[#f4f4f0] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:max-h-[90vh] sm:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center justify-center border-2 border-black bg-lime-400 px-3 py-2 font-bold text-black transition hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-lime-300 active:translate-x-1 active:translate-y-1 active:shadow-none"
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {project.coverVideoKey ? (
              <div className="aspect-[16/10] overflow-hidden border-2 border-black bg-white">
                <video
                  src={projectImageMap[project.coverVideoKey]}
                  poster={projectImageMap[project.coverImageKey]}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            ) : (
              <div className="relative aspect-[16/10] overflow-hidden border-2 border-black bg-white">
                <img
                  src={
                    carouselImages.length > 0
                      ? carouselImages[currentImageIndex]
                      : projectImageMap[project.coverImageKey]
                  }
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                {carouselImages.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 border-2 border-black bg-lime-400 px-3 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-x-0.5 hover:bg-lime-300 active:translate-x-1 active:shadow-none"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 border-2 border-black bg-lime-400 px-3 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-0.5 hover:bg-lime-300 active:translate-x-1 active:shadow-none"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                ) : null}
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  id="project-modal-title"
                  className="text-2xl font-black uppercase break-words text-[#1D2E4A] sm:text-3xl"
                >
                  {project.title}
                </h2>
                <span className="border-2 border-black bg-[#A3E635] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
                  {project.category}
                </span>
              </div>
              <p className="text-base leading-7 text-[#52667E]">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                {(project.tools ?? []).map((tool) => (
                  <span
                    key={tool}
                    className="border-2 border-black bg-white px-3 py-1 text-xs font-bold uppercase text-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black">
                Project Details
              </h3>
              <dl className="mt-4 space-y-3 text-sm text-black">
                <div className="flex justify-between gap-4">
                  <dt>Role</dt>
                  <dd className="text-right font-bold">
                    {project.details.role}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Timeline</dt>
                  <dd className="text-right font-bold">
                    {project.details.timeline}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Client</dt>
                  <dd className="text-right font-bold">
                    {project.details.client}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-lime-400 px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-lime-300 active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto sm:px-5"
                >
                  <LinkIcon size={16} /> LIVE DEMO ↗
                </a>
              ) : null}
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-[#7C3AED] px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-[#6D28D9] active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto sm:px-5"
                >
                  <Github size={16} /> GITHUB REPO ↗
                </a>
              ) : null}
              {project.links.behance ? (
                <a
                  href={project.links.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center border-2 border-black bg-white px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 hover:bg-[#D2CFCA] active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto sm:px-5"
                >
                  Behance
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
