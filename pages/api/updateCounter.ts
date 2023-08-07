import { NextApiRequest, NextApiResponse } from "next";
import updateCounterInDatabase from "./postFirebaseCount"; // Replace with the actual path to your updateCounterInDatabase function

export default async function handler(newCounterValue: number) {
  try {
    await updateCounterInDatabase(newCounterValue);
  } catch (error) {
    console.error("Error:", error);
  }
}
