import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Basic handler skeleton for Stripe webhooks
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  // TODO: verify webhook signature with Stripe SDK
  try {
    // const event = req.body;
    console.log('stripe webhook received');
    res.status(200).json({ received: true });
  } catch (err) {
    console.error(err);
    res.status(400).send('Webhook Error');
  }
}
