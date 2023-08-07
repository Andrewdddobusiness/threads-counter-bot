"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import getCounterFromDatabase from "../../pages/api/getFirebaseCount";

import Footer from "@/../components/footer";

import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  weight: "700",
  preload: false,
});

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    // Fetch the current counter value from the database when the component mounts
    getCounterFromDatabase()
      .then((currentCounterValue) => setCounter(currentCounterValue))
      .catch((error) => console.error("Error fetching counter:", error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center content-between">
      <motion.div
        animate={{
          y: ["0%", "5%", "0%"], // Animate the y-axis position of the text
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <div className="text-center" style={{ marginTop: "15rem" }}>
          <h1 className={`text-6xl mb-6 text-slate-700 ${ubuntu.className}`}>
            <span className="text-teal-400">Infinity</span>{" "}
            <span className="text-white">Counter</span>
          </h1>
          <h3 className={`text-1xl mb-6 ${ubuntu.className}`}>
            A never-ending counter posted on Threads.
          </h3>
        </div>
      </motion.div>

      <div className="text-center " style={{ marginTop: "5rem" }}>
        <h1 className={`text-9xl font-bold`}>{counter}</h1>
      </div>

      <div
        className="mt-6 grid text-center lg:grid-cols-1 "
        style={{ marginTop: "13rem" }}
      >
        <a
          href="https://www.threads.net/@threadscounter"
          className="group rounded-lg border border-neutral-700 px-5 py-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Threads{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See the counter in action here!
          </p>
        </a>
      </div>

      <Footer />
    </main>
  );
}
