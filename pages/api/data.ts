import { NextApiRequest, NextApiResponse } from 'next';
import { MeteoriteService } from '../services/MeteoriteService';

// This is our simple HTTP API. It's not strict, but using supports using GET
// (and other methods if you want) to query the data. It takes a single
// query parameter (named query) that represents the user's English input.
// If left empty, the first 15 rows of meteorite data will be returned.

const meteoriteService = new MeteoriteService()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (typeof query !== 'string') {
    return res.status(400).json({
      code: 400,
      message: "query argument must be a string",
    })
  }

  const meteorites = query ?
    await meteoriteService.queryWithNatualLanguage(query) :
    await meteoriteService.getFirstPage();
  return res.status(200).json({ items: meteorites });
}
