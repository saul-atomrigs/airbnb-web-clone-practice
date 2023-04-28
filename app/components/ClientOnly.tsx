"use client";

import React, { ReactNode, useEffect, useState } from "react";

type ChildrenProps = {
  children: ReactNode;
};

export default function ClientOnly({ children }: ChildrenProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
