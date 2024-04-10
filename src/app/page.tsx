// Lib Imports.
import Image from 'next/image';
import Link from 'next/link';

// Local Imports.
import {
  connectToDatabase,
  getCollectionNames,
  getModel,
} from '@/libs/dbClient';

// Component.
export default async function Home() {
  // Waiting for a successful connection to the database.
  try {
    await connectToDatabase();
  } catch {
    throw new Error('Unable to connect to database.');
  }

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
    <main className="w-screen p-8 flex flex-wrap justify-between gap-4">
      {mangas.map((item) => (
        <Link href={`/${item.mangaName}`} key={item.id}>
          <Image
            alt="Manga Cover"
            src={item.mangaCover || '/icons/icon.ico'}
            width={250}
            height={400}
          />
        </Link>
      ))}
    </main>
  );
}
