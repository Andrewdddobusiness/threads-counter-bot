import { NextApiRequest, NextApiResponse } from "next";

import scheduleTask from "../scheduleTask";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Post thread count
  await scheduleTask(req, res);
};

export default handler;
