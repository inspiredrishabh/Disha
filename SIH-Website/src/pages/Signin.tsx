import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

import Topbar from "../components/myComponents/Topbar";
import { ThemeProvider } from "../components/theme-provider";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const signinSchema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
});

function Signin() {
  const navigate = useNavigate();
  const elementRef = useRef<HTMLParagraphElement>(null);
  const elementRef2 = useRef<HTMLParagraphElement>(null);

  const signin = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signinSchema>) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === data.username && parsedUser.password === data.password) {
        navigate("/dashboard");
      } else {
        if (elementRef.current) {
          elementRef.current.classList.remove("hidden");
        }
      }
    } else {
      if (elementRef2.current) {
        elementRef2.current.classList.remove("hidden");
      }
    }
  };

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="px-16 py-8">
          <Topbar />
        </div>
        <div className="w-screen flex flex-col items-center gap-2 py-40">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">Sign in to your account</h1>
            <p className="text-gray-600 w-2/3 text-center text-xs md:text-base">
              Get started with our educational dashboard today.
            </p>
          </div>

          <div className="w-1/2">
            <Form {...signin}>
              <form onSubmit={signin.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={signin.control}
                  name="username"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />

                <FormField
                  control={signin.control}
                  name="password"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <div className="flex justify-center text-red-600">
                  <p className="hidden" ref={elementRef}>
                    Wrong credentials
                  </p>
                  <p className="hidden" ref={elementRef2}>
                    User not found
                  </p>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-800">
                  Sign In
                </Button>
              </form>
              <div className="w-full flex flex-row justify-center gap-2 mt-4 text-xs md:text-sm">
                <p>Don't have an account</p>
                <a
                  className="underline hover:cursor-pointer"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </a>
              </div>
            </Form>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Signin;