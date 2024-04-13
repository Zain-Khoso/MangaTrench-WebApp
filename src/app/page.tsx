// Lib Imports.
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Local Imports.
import Navbar from '@/components/Navbar';
import {
  connectToMongodb,
  getCollectionNames,
  getModel,
} from '@/libs/dbClient';

// Metadata
export const metadata: Metadata = {
  title: 'Manga Trench',
  description: 'Read popular manga online for free.',
};

// Component.
export default async function Home() {
  // Waiting for a successful connection to the database.
  await connectToMongodb();

  // Getting the name and cover of each available manga.
  const collectionNames = await getCollectionNames();
  const mangas = await Promise.all(
    collectionNames.map(async (collectionName) => {
      const collection = getModel(collectionName);
      const firstChapter = await collection.findOne({ ChapterNum: '1' });
      return {
        id: firstChapter?._id,
        mangaName: collectionName,
        mangaCover: firstChapter?.pages[0],
      };
    })
  );

  return (
    <>
      <Navbar />
      <main className="max-w-[100vw] p-8 flex flex-wrap justify-center items-center gap-12">
        {mangas.map((item) => (
          <Link href={`/${item.mangaName}`} key={item.id}>
            <Image
              alt="Manga Cover"
              src={item.mangaCover!}
              width={250}
              height={400}
            />
          </Link>
        ))}
      </main>
    </>
  );
}
