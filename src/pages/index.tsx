import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MainLayout from "src/layout/Layout";
import ToggleDarkMode from "@/button/ToggleDarkMode";

import PageHead from "@/global/PageHead";

interface HomeProps {}
const Home: NextPage = ({}: HomeProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <PageHead title="NextJS Starter Template" />
      <MainLayout>
        <div className="h-screen flex gap-5 flex-col justify-center items-center">
          <h1 className="text-5xl">
            Startup Template for{" "}
            <span className="text-light-accent dark:text-dark-accent font-extrabold">
              Next-JS
            </span>
          </h1>
          <h2 className="text-2xl text-light-body dark:text-dark-body">
            Typescript, Tailwind, Next-Seo, Next-Themes, Eslint
          </h2>
          <ToggleDarkMode />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
