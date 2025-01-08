import { NextRequest, NextResponse } from 'next/server';

// This file handles POST requests to /api/plugins/overnu-webhook/webhook
export async function POST(req: NextRequest) {
  try {
    const { payload } = await req.json() ?? {};
    if (!payload) {
      return NextResponse.json({ error: "Missing payload" }, { status: 400 });
    }

    // Example n8n endpoint + optional token
    const n8nUrl = "https://quantaintelligence.app.n8n.cloud/webhook/a9234fec-4d8c-492f-ae2a-7fcda15d9a6f";
    const token = "0iL3eWhg5hnSIWPPVlGYLmsU";

    // Make the server-side call to n8n
    const response = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, payload })
    });

    if (!response.ok) {
      throw new Error(`n8n request failed with status ${response.status}`);
    }

    const data = await response.text(); // or .json()
    return NextResponse.json({ success: true, fromN8n: data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
