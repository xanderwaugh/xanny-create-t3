import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import Hero from "~/components/Hero";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({
    text: "From the client!",
  });

  return (
    <div className="page relative">
      <Head>
        <title>xanny.dev</title>
      </Head>

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <AuthShowcase />
      </div>
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();

  const { data: secretMsg } = api.example.getSecretMessage.useQuery(undefined, {
    enabled: !!session?.user !== undefined,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {session && <span>Logged in as {session.user?.name}</span>}
        {secretMsg && <span> - {secretMsg}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
