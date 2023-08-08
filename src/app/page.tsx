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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current counter value from the database when the component mounts
    getCounterFromDatabase()
      .then((currentCounterValue) => setCounter(currentCounterValue))
      .catch((error) => console.error("Error fetching counter:", error));
    setLoading(false);
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
        {loading ? ( // Display loading spinner while loading is true
          <div className="animate-spin">
            <svg
              className="w-16 h-16 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.875 3.2 8.062l2.83-2.83zM12 20c-2.073 0-4.01-.335-5.617-.945l-2.828 2.828A11.916 11.916 0 0012 24a11.916 11.916 0 008.445-3.117l-2.828-2.828A7.958 7.958 0 0112 20zm8-7.291A7.962 7.962 0 0020 12h4c0 3.042-1.135 5.875-3.2 8.062l-2.828-2.83zM12 0c2.073 0 4.01.335 5.617.945l2.828-2.828A11.916 11.916 0 0012 0a11.916 11.916 0 00-8.445 3.117l2.828 2.828A7.958 7.958 0 0112 0z"
              />
            </svg>
          </div>
        ) : (
          <h1 className={`text-9xl font-bold text-white`}>{counter}</h1>
        )}
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
          <h2 className={`mb-3 text-2xl font-semibold text-white`}>
            Threads{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-white`}>
            See the counter in action here!
          </p>
        </a>
      </div>

      <Footer />
    </main>
  );
}
