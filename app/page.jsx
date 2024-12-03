"use client"; // Ensure the component is treated as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the new Next.js navigation API
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        router.push("/mobile-home"); // Redirect to mobile-specific page if on mobile screen
      }
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [router]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fitness Coach</span>
            <h1 className="h1 mb-6">
              Welcome! I&apos;m <br /> <span className="text-accent">Harvey Torres</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">

            I’m <strong>Harvey Torres</strong>—20 years old, Polk County, Florida raised, and here to help you get your fitness life together. I’ve competed in physique competitions twice, so I know what it takes to go from “maybe tomorrow” to “let’s go, now.”
          </p>
          <p className="max-w-[500px] mb-9 text-white/80">
            I’m all about creating workouts that don’t feel like copy-paste. Whether you’re booking an <strong>online consult</strong>, hitting an <strong>in-person session</strong>, or diving into my personal workout program template, we’re making it real and making it yours.
          </p>
          <p className="max-w-[500px] mb-9 text-white/80">
            No gimmicks, no fluff—just a plan that works for you and keeps you coming back. Ready to quit scrolling and start lifting? Let’s talk. Your glow-up starts here.
          </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="http://program.zumrod.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500"
              >
                <span>Start Program</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
