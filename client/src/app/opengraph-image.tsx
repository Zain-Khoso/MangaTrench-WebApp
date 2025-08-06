// Lib Imports.
import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'About Manga Trench';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <section
        style={{
          background: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 32,
              color: '#111922',
              fontSizeAdjust: '900',
            }}
          >
            Welcome to,
          </span>
          <h1
            style={{
              fontSize: 128,
              color: '#fea93a',
              fontSizeAdjust: '900',
            }}
          >
            Manga Trench
          </h1>
        </div>
      </section>
    ),
    {
      ...size,
    }
  );
}
