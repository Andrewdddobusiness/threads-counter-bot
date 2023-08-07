import { NextApiRequest, NextApiResponse } from "next";

import scheduleTask from "../scheduleTask";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Post thread count
  await scheduleTask(req, res);
}
