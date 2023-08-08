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
    throw error; // Rethrow the error to be handled by the caller
  }
};

export default handleScheduledTask;
