import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest) {
  return NextResponse.json({
    api: [
      {
        description: 'Send data to OverNu (n8n) from LobeChat',
        name: 'sendDataToWebhook',
        parameters: {
          properties: {
            payload: {
              description: 'Data to forward to OverNu',
              type: 'string',
            },
          },
          required: ['payload'],
          type: 'object',
        },
        url: 'https://<your-vercel-domain>.vercel.app/api/plugins/overnu-webhook/webhook',
      },
    ],
    identifier: 'overnu-webhook',
    meta: {
      description: 'Fully integrated plugin for sending data to OverNu webhooks',
      tags: ['webhook'],
      title: 'OverNu Webhook Plugin',
      avatar: '🚀',
    },
    version: '1',
  });
}
