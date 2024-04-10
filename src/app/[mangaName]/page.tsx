// Lib Imports.
import Link from 'next/link';

// Local Imports.
import { connectToDatabase, getModel } from '@/libs/dbClient';
import Navbar from '@/components/Navbar';

type Props = {
  params: {
    mangaName: string;
  };
};

export default async function MangaPage({ params: { mangaName } }: Props) {
  // Waiting for a successful connection to the database.
  try {
    await connectToDatabase();
  } catch {
    throw new Error(Errors.UNABLE_TO_CONNECT_TO_MONGODB);
  }

  const manga = await getModel(mangaName)
    .aggregate()
    .sort({ ChapterNum: 'ascending' });
  const chapters = manga.map((item) => {
    return { chapterNumber: item.ChapterNum, id: item.id };
  });

  return (
    <>
      <Navbar />
      <main className="max-w-[100vw] p-8 grid grid-cols-8 gap-4 place-items-center">
        {chapters.map((item) => (
          <Link
            href={`/${mangaName}/chapter/${item.chapterNumber}`}
            key={`/${mangaName}/chapter/${item.chapterNumber}`}
            className="bg-teal-800 text-white px-12 py-2 rounded"
          >
            Chapter {item.chapterNumber}
          </Link>
        ))}
      </main>
    </>
  );
}
