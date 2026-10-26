import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react"
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3 bg-white text-black">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex font-bold gap-2 items-center ">
                            <CircleUserRound className="text-orange-500"/>
                            {user?.email}                        
                        </span>
                        ) : (
                        <span> Welcome to MernEats.com!</span>
                        )}

                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks/>
                    ) : (
                       <Button
                        className="flex-1 font-bold bg-orange-500 text-white hover:bg-black hover:text-white"
                        onClick={async () => await loginWithRedirect()}
                    >
                        Log In
                    </Button>
                    )}
                    
                </SheetDescription>
            </SheetContent>

        </Sheet>
    );
};

export default MobileNav;