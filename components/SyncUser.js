"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SyncUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const syncUser = async () => {
      try {
        await fetch("/api/users/sync", {
          method: "POST",
        });
      } catch (error) {
        console.log(error);
      }
    };

    syncUser();
  }, [isSignedIn, user]);

  return null;
}