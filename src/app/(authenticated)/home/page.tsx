"use client"

import { Button } from "@/components/button";
import { useAuth } from "@/hooks/use-auth";
import { signOut } from "next-auth/react";

export default function HomePage() {
  const { session } = useAuth();

  const logout = async () => {
    try {
      await signOut({
        redirect: true,
        callbackUrl: "/sign-in?error=logout",
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Welcome to the Home Page</h1>
      <div className="mt-12">
        {/* <Image
          src={user?.profilePic}
          alt="Profile Picture"
          width={100}
          height={100}
        /> */}
        {session && (
          <div>
            <h2>User Information</h2>
            <p>Email: {session.user?.email}</p>
            <p>Name: {session.user?.firstName} {session.user?.lastName}</p>
            <p>Phone: {session.user?.phone}</p>
          </div>
        )}
      </div>
      <div className="mt-12">
        <Button type="button" onClick={logout} variant="primary">
          Logout
        </Button>
      </div>
    </div>
  );
}

