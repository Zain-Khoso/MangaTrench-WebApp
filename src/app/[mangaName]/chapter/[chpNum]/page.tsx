// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Local Imports.
import { connectToDatabase, getModel } from '@/libs/dbClient';

type Props = {
  params: {
    mangaName: string;
    chpNum: string;
  };
};

export default async function MangaPage({
  params: { mangaName, chpNum },
}: Props) {
  // Waiting for a successful connection to the database.
  try {
    await connectToDatabase();
  } catch {
    throw new Error(Errors.UNABLE_TO_CONNECT_TO_MONGODB);
  }

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
