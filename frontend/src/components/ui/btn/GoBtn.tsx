"use client";
import React from "react";
import {
  animationManager,
  useGSAP,
} from "../../../_lib/gsap/animation-manager";

type SectionType =
  | "#Hero"
  | "#Intro"
  | "#Catalogue"
  | "#Explore"
  | "#Testimonials";

type ScrollProps = {
  hasScroll: true;
  scrollTo: SectionType;
  children: React.ReactNode;
  className?: string;
  goToUrl?: never;
};

type LinkProps = {
  hasScroll: false;
  goToUrl: string;
  children: React.ReactNode;
  className?: string;
  scrollTo?: never;
};

type Props = ScrollProps | LinkProps;

const LinkBtn = ({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <a href={url} className={`btn ${className}`} target="_blank">
      {children}
    </a>
  );
};

const ScrollBtn = ({
  children,
  target,
  className,
}: {
  children: React.ReactNode;
  target: string;
  className: string;
}) => {
  const { contextSafe } = useGSAP();

  const handleScroll = contextSafe(() => {
    animationManager.scrollTo(target);
  });
  return (
    <button className={`btn ${className}`} onClick={() => handleScroll()}>
      {children}
    </button>
  );
};

const GoBtn = ({
  hasScroll = true,
  goToUrl = "/",
  scrollTo = "#Hero",
  children,
  className = "btn",
}: Props) => {
  return hasScroll ? (
    <ScrollBtn target={scrollTo} className={className}>
      {children}
    </ScrollBtn>
  ) : (
    <LinkBtn url={goToUrl} className={className}>
      {children}
    </LinkBtn>
  );
};

export default GoBtn;
