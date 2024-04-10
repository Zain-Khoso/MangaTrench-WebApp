'use client';

// Lib Imports.
import { useRouter } from 'next/navigation';

// Types.
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

// Component
export default function Error({ reset }: Props) {
  const router = useRouter();

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl text-red-500">Something went Wrong.</h1>
      <button
        className="px-4 py-2 text-lg bg-green-500 rounded-lg font-medium"
        onClick={reset}
      >
        Retry
      </button>
      <button
        className="px-4 py-2 text-lg bg-emerald-600 rounded-lg font-medium"
        onClick={() => router.push('/')}
      >
        Go to home
      </button>
    </main>
  );
}
