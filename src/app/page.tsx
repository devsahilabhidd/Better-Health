'use client';

import Header from "@/components/header";
import { ModeToggle } from "@/components/toogle";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/auth-context.provider";
import { AUTH_ROUTES, HOME_ROUTE } from "@/lib/constants/constants";
import { useRouter } from "next/navigation";
import { FaRunning } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  const {
    user,
  } = useAuthContext();

  return (
    <div className="bg-background flex flex-col items-center justify-center min-h-screen py-10">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex gap-8">
          {
            user ? (
              <Button
                onClick={() => router.push(HOME_ROUTE)}
                variant="app-primary"
                size="lg"
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => router.push(AUTH_ROUTES[0])}
                  variant="app-primary"
                  size="lg"
                >
                  Signin
                </Button>
                <Button
                  onClick={() => router.push(AUTH_ROUTES[1])}
                  variant="app-primary"
                  size="lg"
                >
                  Signup
                </Button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
