import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const checkAuth = async () => {
    const { user, isSignedIn } = useUser();

    if (!user || !isSignedIn) {
        redirect("/");
    }

    return user;
};