'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => console.log('Clicked')}>Click Me</Button>
    </>
  );
}
