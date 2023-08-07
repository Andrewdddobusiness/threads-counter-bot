// pages/api/scheduleTask.ts
import { NextApiRequest, NextApiResponse } from "next";
import getCounterFromDatabase from "./getFirebaseCount";

import postThread from "./postThread";
import updateCounter from "./updateCounter";

// This function will be executed when the cron job is triggered
const handleScheduledTask = async () => {
  try {
    // Fetch the current counter value from the database
    const currentCounterValue = await getCounterFromDatabase();
    console.log("count:", currentCounterValue);

    // Increase the counter value
    const newCounterValue = currentCounterValue + 1;

    // Post thread count
    await postThread(currentCounterValue);

    // Update the counter value
    await updateCounter(newCounterValue);

    console.log("Scheduled task executed successfully.");
  } catch (error) {
    console.error("Error executing scheduled task:", error);
  }
};

// API route handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Perform any validation if needed (optional)

    // Trigger the scheduled task
    await handleScheduledTask();

    // Respond with a success message
    res.status(200).json({ message: "Scheduled task executed." });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
