import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { ListItem } from "@/components/ui/list-item";
import { about, navlinks } from "@/lib/datas";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image
              src="/logo-transparent.png"
              alt="MicroBiz"
              width={50}
              height={50}
            />
            <span className="sr-only">MicroBiz</span>
          </Link>
          <div className="grid gap-2 py-6">
            {navlinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image
          src="/logo-transparent.png"
          alt="MicroBiz"
          width={50}
          height={50}
        />
        <span className="sr-only">MicroBiz</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/home"
                      >
                        <Image
                          src={"/logo-transparent.png"}
                          height={500}
                          width={500}
                          alt="MicroBiz"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          MicroBiz
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          An automated data analyst website for small and
                          medium-sized enterprises.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {/* //TODO Session verification */}
                  <ListItem href="/auth/login" title="Get Started">
                    Start to use our product. Required to log in first.
                  </ListItem>
                  <ListItem href="/example" title="How to Use">
                    Example of how to use our product.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  {about.map((about) => (
                    <ListItem
                      key={about.title}
                      title={about.title}
                      href={about.href}
                    >
                      {about.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      {/* //TODO Session Verification */}
      <Button color="#5CB85C">Log In</Button>
    </header>
  );
}
