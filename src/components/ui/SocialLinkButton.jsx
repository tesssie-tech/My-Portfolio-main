import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function TikTokIcon() {
  return <span className="font-mono text-sm font-black leading-none">T</span>;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  tiktok: TikTokIcon,
  email: Mail,
};

function isExternalLink(href) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export function SocialLinkButton({ link }) {
  const Icon = iconMap[link.iconKey] ?? Mail;
  const external = isExternalLink(link.href);

  return (
    <a
      href={link.href}
      className="inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
      aria-label={link.label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <Icon size={18} />
    </a>
  );
}