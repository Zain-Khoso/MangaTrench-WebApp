// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Local Imports.
import { connectToMongodb, getModel } from '@/libs/dbClient';

// Types.
type Props = {
  params: {
    mangaName: string;
    chpNum: string;
  };
};

// Metadata
export function generateMetadata({ params: { mangaName, chpNum } }: Props) {
  const manga = mangaName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  return {
    title: `Chapter ${chpNum} | ${manga}`,
    description: `Read ${manga} manga online all you want, as long as you want to. for free.`,
  };
}

// Component.
export default async function MangaPage({
  params: { mangaName, chpNum },
}: Props) {
  // Waiting for a successful connection to the database.
  await connectToMongodb();

  const manga = mangaName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  const chapter = await getModel(mangaName).findOne({ ChapterNum: chpNum });

  return (
    <main className="max-w-[100vw] p-8">
      <h1 className="text-4xl font-bold mb-12">
        <Link href={`/${mangaName}`}>{manga}</Link>,{' '}
        <Link href={`/${mangaName}/chapter/${chpNum}`}>Chapter: {chpNum}</Link>
      </h1>

      <section className="w-full flex flex-col items-center gap-4">
        {chapter?.pages.map((page, index) => (
          <Image
            alt={`${manga}, Chapter: ${chpNum}. Page: ${index + 1}`}
            src={page}
            key={page}
            width={700}
            height={1000}
          />
        ))}
      </section>
    </main>
  );
}
