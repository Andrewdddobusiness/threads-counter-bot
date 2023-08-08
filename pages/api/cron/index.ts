import type { NextApiRequest, NextApiResponse } from "next";
import handleScheduledTask from "../scheduleTask";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Trigger the scheduled task
    await handleScheduledTask();

    // Respond with a success message
    res.status(200).json({ message: "Scheduled task executed." });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An internal error occurred." });
  }

  res.status(405).end(); // Method Not Allowed
}
