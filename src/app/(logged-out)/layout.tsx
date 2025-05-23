import React from "react";

interface LoggedOutLayoutProps {
  children?: React.ReactNode;
}

export default function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
      {children}
    </div>
  );
}
