"use client";

import { useState, useEffect } from "react";

interface GitHubStarsProps {
  repo?: string;
  className?: string;
}

export function GitHubStars({
  repo = "provero-org/provero",
  className = "",
}: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, [repo]);

  if (stars === null) return null;

  return (
    <span className={className}>
      {stars === 0
        ? "★ Star"
        : stars >= 1000
          ? `★ ${(stars / 1000).toFixed(1)}k`
          : `★ ${stars}`}
    </span>
  );
}
