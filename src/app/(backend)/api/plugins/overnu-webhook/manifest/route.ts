import { NextRequest, NextResponse } from 'next/server';

// This file handles GET requests to /api/plugins/overnu-webhook/manifest
export async function GET(req: NextRequest) {
  // Replace <your-vercel-domain> with the final deployment domain,
  // or dynamically build it (see "dynamically detect domain" approach).
  return NextResponse.json({
    api: [
      {
        name: "sendDataToWebhook",
        description: "Send data to OverNu from LobeChat",
        url: "https://<your-vercel-domain>.vercel.app/api/plugins/overnu-webhook/webhook",
        parameters: {
          type: "object",
          properties: {
            payload: {
              type: "string",
              description: "Data to send to OverNu"
            }
          },
          required: ["payload"]
        }
      }
    ],
    identifier: "overnu-webhook",
    meta: {
      avatar: "🚀",
      tags: ["webhook"],
      title: "OverNu Webhook Plugin",
      description: "Fully integrated plugin for sending data to OverNu (n8n)"
    },
    version: "1"
  });
}
