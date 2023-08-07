import { getDatabase, ref, set } from "firebase/database";
import firebaseApp from "./firebase";

function updateCounterInDatabase(counterValue: number): Promise<void> {
  // Get a reference to the location where you want to store the counter value
  const database = getDatabase(firebaseApp);
  const counterRef = ref(database, "count");
  console.log(4);

  // Set the counter value at the specified location
  return set(counterRef, { count: counterValue })
    .then(() => {
      console.log("Counter updated in the database!");
    })
    .catch((error: Error) => {
      console.error("Error updating counter:", error);
    });
}

export default updateCounterInDatabase;
