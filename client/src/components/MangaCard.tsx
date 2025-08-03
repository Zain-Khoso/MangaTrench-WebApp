// Lib Imports.
import Image from 'next/image';
import Link from 'next/link';

// Assets.
import { FaStar, FaCalendar, FaChartLine } from 'react-icons/fa';

// Components.
import { H3 } from './shadcn/typography';

// Props.
type Props = {
  slug: string;
  title: string;
  banner: string;
  rating: number;
  startDate: Date;
  ranking: number;
};

// This component is used throughout the app to show indivisual mangas.
export default function MangaCard({ slug, title, banner, ranking, rating, startDate }: Props) {
  const startYear = startDate.getFullYear();

  const rankString = ranking.toString();
  let rank = '';

  if (rankString.endsWith('1')) rank = rankString + 'st';
  else if (rankString.endsWith('2')) rank = rankString + 'nd';
  else if (rankString.endsWith('3')) rank = rankString + 'rd';
  else if (ranking > 3) rank = rankString + 'th';
  else rank = ranking.toString();

  return (
    <Link href={`/manga/${slug}`} className="w-full">
      <article className="bg-background w-full space-y-2 overflow-hidden rounded-xl pb-6 shadow-xl">
        <div className="relative aspect-video w-full">
          <Image
            alt={title + ' Banner'}
            src={banner}
            fill
            className="absolute object-cover object-center"
          />
        </div>

        <main className="space-y-6 px-4">
          <div className="flex items-center gap-2">
            <FaStar
              size={24}
              className={rating >= 1 ? 'fill-primary' : 'fill-secondary-foreground'}
            />
            <FaStar
              size={24}
              className={rating >= 2 ? 'fill-primary' : 'fill-secondary-foreground'}
            />
            <FaStar
              size={24}
              className={rating >= 3 ? 'fill-primary' : 'fill-secondary-foreground'}
            />
            <FaStar
              size={24}
              className={rating >= 4 ? 'fill-primary' : 'fill-secondary-foreground'}
            />
            <FaStar
              size={24}
              className={rating >= 5 ? 'fill-primary' : 'fill-secondary-foreground'}
            />
          </div>

          <H3 className="max-w-full text-ellipsis">{title}</H3>

          <div className="flex gap-2">
            <FaCalendar size={18} className="fill-secondary-foreground" />
            <span>Started In {startYear}</span>
          </div>

          <div className="flex gap-2">
            <FaChartLine size={18} className="fill-secondary-foreground" />
            <span>{rank} most popular</span>
          </div>
        </main>
      </article>
    </Link>
  );
}
