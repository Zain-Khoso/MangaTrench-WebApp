// Lib Imports.
import Link from 'next/link';
import { Metadata } from 'next';

// Local Imports.
import {
  connectToMongodb,
  getCollectionNames,
  getModel,
} from '@/libs/dbClient';
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

// Static Params
export async function generateStaticParams() {
  // Waiting for a successful connection to the database.
  await connectToMongodb();

  // Getting the name and cover of each available manga.
  return await getCollectionNames();
}

// Component.
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
      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.5rem",
        padding:"1.5rem"
      }}>
        {chapters.sort((a, b) => a.chapterNumber - b.chapterNumber).map((item) => (
          <Link
            href={`/${mangaName}/chapter/${item.chapterNumber}`}
            key={item.id}
            className="bg-teal-800 text-white px-12 py-2 rounded whitespace-nowrap text-center"
          >
            Chapter {item.chapterNumber}
          </Link>
        ))}
      </main>
    </>
  );
}
