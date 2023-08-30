import type { NextApiRequest, NextApiResponse } from 'next';
import stores from 'public/stores.json';
import { Store } from '@/types/store';

type ResponseData = {
  stores: Store[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ stores });
}
