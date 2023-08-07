const { ThreadsAPI } = require("threads-api");

// Define the API function
export default async function handler(currentCounterValue: number) {
  const threadsAPI = new ThreadsAPI({
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  });

  try {
    await threadsAPI.publish({
      text: `Road to Infinity: ${currentCounterValue}`,
      currentCounterValue, // Pass the 'count' value directly to the 'publish' function
    });
    console.log("Count has been Threaded!");
  } catch (error) {
    // If there's an error, respond with an error message and a 500 status code
    console.error("Error:", error);
  }
}
