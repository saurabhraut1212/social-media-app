import { Metadata } from "next";
import Image from "next/image";
import loginImage from "@/assets/login-image.jpg";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metaData: Metadata = {
  title: "Login",
};
const page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="max-h=[40rem] flex h-full w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Login to bugbook</h1>
          </div>
          <div className="space-y-5">
            <LoginForm />
            <Link href="/signup" className="block text-center hover:underline">
              Don&apos;t have an account? sign up
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default page;
