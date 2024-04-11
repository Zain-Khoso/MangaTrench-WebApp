// Lib Imports.
import Link from 'next/link';
import { Metadata } from 'next';

// Local Imports.
import { connectToMongodb, getModel } from '@/libs/dbClient';
import Navbar from '@/components/Navbar';

type Props = {
  params: {
    mangaName: string;
  };
};

// Metadata
export function generateMetadata({ params: { mangaName } }: Props): Metadata {
  const manga = mangaName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  return {
    title: manga,
    description: `Read ${manga} manga online all you want, as long as you want to. for free.`,
  };
}

export default async function MangaPage({ params: { mangaName } }: Props) {
  // Waiting for a successful connection to the database.
  await connectToMongodb();

  const manga = await getModel(mangaName)
    .aggregate()
    .sort({ ChapterNum: 'ascending' });
  const chapters = manga.map((item) => {
    return { chapterNumber: item.ChapterNum, id: item.id };
  });

  return (
    <>
      <Navbar />
      <main className="max-w-[100vw] p-8 flex flex-wrap justify-center items-center gap-4 place-items-center">
        {chapters.map((item) => (
          <Link
            href={`/${mangaName}/chapter/${item.chapterNumber}`}
            key={item.id}
            className="bg-teal-800 text-white px-12 py-2 rounded"
          >
            Chapter {item.chapterNumber}
          </Link>
        ))}
      </main>
    </>
  );
}
