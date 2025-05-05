import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LoggedOut() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <p className="text-muted-foreground">
        The best way to support me is to donate to my cause.
      </p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <span>or</span>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
