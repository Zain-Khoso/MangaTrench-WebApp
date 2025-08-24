// Lib Imports.
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Local Imports.
import { auth } from '@/utils/firebaseAdmin';

// Setting the runtime to Node.js.
export const runtime = 'nodejs';

export async function GET(_: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('custom-session-token')?.value;

    if (!sessionCookie) return NextResponse.json({ success: true, isValid: false, uid: '' });

    const decoded = await auth.verifySessionCookie(sessionCookie);
    return NextResponse.json({ success: true, isValid: true, uid: decoded.uid });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false, isValid: false, uid: '' });
  }
}
