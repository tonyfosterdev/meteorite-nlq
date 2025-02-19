import { NextApiRequest, NextApiResponse } from 'next';
import { MeteoriteService } from '../services/MeteoriteService';
import { LLMService } from '../services/LLMService';

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
