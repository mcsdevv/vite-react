import { VercelRequest, VercelResponse } from "@vercel/node";

import { helperFunction } from "./utils/helper.ts";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const result = helperFunction();
  res.status(200).json({ result });
}
