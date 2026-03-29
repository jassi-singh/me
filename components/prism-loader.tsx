"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
/* Load order matters: each grammar extends the previous (see Prism source). */
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";

type Props = {
  slug: string;
};

export default function PrismLoader({ slug }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, [slug]);

  return null;
}
