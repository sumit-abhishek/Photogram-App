import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { UserSignUp } from "@/types/types";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Link } from "react-router-dom";
const initialValue: UserSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [userInfo, setUserInfo] = useState<UserSignUp>(initialValue);
  const handleSubmit = async () => {
    //write logic for SignUp using email and password
  };
  const handleGoogleSignIn = async () => {
    //write logic for SignUp using Google
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center mb-4">PhotoGram</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid">
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="dipesh@example.com"
              value={userInfo.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmpassword">Confirm password</Label>
            <Input
              id="confirmpassword"
              type="password"
              placeholder="Confirm password"
              value={userInfo.confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserInfo({
                  ...userInfo,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
          <p className="mt-3 text-sm text-center">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
export default Signup;
