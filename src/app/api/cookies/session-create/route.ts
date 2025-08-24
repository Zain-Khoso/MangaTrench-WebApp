// Lib Imports.
import { NextRequest, NextResponse } from 'next/server';

// Local Imports.
import { auth } from '@/utils/firebaseAdmin';

// Setting the runtime to Node.js.
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();

    if (!idToken) return NextResponse.json({ success: false, message: 'ID Token is missing.' });

    // 5 days time-period.
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ success: true, message: 'Session Cookie is set.' });

    // Setting the new cookie on the response object.
    response.cookies.set({
      name: 'custom-session-token',
      value: sessionCookie,
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false, message: 'Something went wrong.' });
  }
}
