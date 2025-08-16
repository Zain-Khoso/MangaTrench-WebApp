// Lib Imports.
import { NextRequest, NextResponse } from 'next/server';

export async function POST(_: NextRequest) {
  try {
    const response = NextResponse.json({ success: true, message: 'Session Cookie is removed.' });

    // Setting the new cookie on the response object.
    response.cookies.set({
      name: 'custom-session-token',
      value: '',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false, message: 'Something went wrong.' });
  }
}
