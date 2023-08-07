import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "./firebase";

function getCounterFromDatabase(): Promise<number> {
  const database = getDatabase(firebaseApp);
  const counterRef = ref(database, "count");

  // Use the `get` function to fetch the data from the database
  return get(counterRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const counterValue = snapshot.val().count;
        console.log("Counter value from the database:", counterValue);
        return counterValue;
      } else {
        console.log("Counter data not found in the database.");
        return 0; // Default value if the data is not found
      }
    })
    .catch((error: Error) => {
      console.error("Error getting counter value:", error);
      throw error;
    });
}

export default getCounterFromDatabase;
