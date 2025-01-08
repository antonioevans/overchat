import { NextRequest, NextResponse } from 'next/server';

export async function POST(_req: NextRequest) {
  try {
    const { payload } = await _req.json();
    if (!payload) {
      return NextResponse.json({ error: 'Missing payload' }, { status: 400 });
    }

    const token = '0iL3eWhg5hnSIWPPVlGYLmsU';
    const n8nUrl =
      'https://quantaintelligence.app.n8n.cloud/webhook/a9234fec-4d8c-492f-ae2a-7fcda15d9a6f';

    const response = await fetch(n8nUrl, {
      body: JSON.stringify({ payload, token }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`n8n request failed with status ${response.status}`);
    }

    const fromN8n = await response.text();
    return NextResponse.json({ error: null, fromN8n, success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, fromN8n: null, success: false },
      { status: 500 },
    );
  }
}
