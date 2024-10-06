"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleSubmit = () => {
    redirect("/dashboard");
  };

  return (
    <Card className="w-[350px] bg-transparent backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Enter your crendential to use our products. (Testing mode)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="test@email.com"
                type="email"
                autoComplete="username"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </div>
          <div className="text-sm my-5">
            <p>
              Did not have any account yet?{" "}
              <Link
                href={"/auth/register"}
                className="text-blue-500 hover:underline"
              >
                Create a new one
              </Link>
              .
            </p>
          </div>
          <div className="flex justify-between w-[100%]">
            <Link href={"/home"}>
              <Button variant="outline">Home Page</Button>
            </Link>
            <Button type="submit">Log In</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}