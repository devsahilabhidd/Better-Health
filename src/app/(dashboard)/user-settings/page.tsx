'use client';

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { logout } from "./logout";
import { redirect } from "next/navigation";

const UserSettingsPage = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = () => {
    startTransition(async () => {
      const result = await logout();
      if ('error' in result) {
        setError(result.error);
        setSuccess(undefined);
      } else {
        setSuccess(result.success);
        setError(undefined);
        redirect("/")
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Button className="" onClick={onSubmit} disabled={isPending}>
        Log-out
      </Button>
      {error && <p>Error: {error}</p>}
      {success && <p>Success: {success}</p>}
    </div>
  );
};

export default UserSettingsPage;