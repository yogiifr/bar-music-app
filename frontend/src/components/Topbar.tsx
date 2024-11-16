import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
  const isAdmin = false;

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        Bar
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2"/>
            Admin Dashboard
          </link>
        )}

        <SignedIn>
          <SignOutButton/>
        </SignedIn>

        <SignedOut>
          <SignInOAuthButtons/>
        </SignedOut>

      </div>
    </div>
  )
}

export default Topbar