// Lib Imports.
import Image from 'next/image';
import Link from 'next/link';

// Assets.
import Creator from '@/assets/brand/creator.png';
import MailBox from '@/assets/MailBox.svg';
import { FaStar, FaFire, FaChrome, FaGithub } from 'react-icons/fa';
import { FaMedium, FaXTwitter, FaLinkedin, FaCheck } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';

// Components.
import SectionHeader from '@/components/static/SectionHeader';
import MangaCard from '@/components/MangaCard';
import ContactForm from '@/components/static/ContactForm';
import { ButtonLink } from '@/components/shadcn/button';
import { H1, H4, P } from '@/components/shadcn/typography';

// Dummy Data.
const mangas = [
  {
    slug: 'berserk',
    title: 'Berserk',
    banner:
      'https://media.kitsu.app/manga/8/poster_image/large-f598ed525107bcb69ebda5bf36c6910d.jpeg',
    startDate: new Date('1989-08-25'),
    ranking: 17,
    rating: 4,
  },
  {
    slug: 'one-piece',
    title: 'One Piece',
    banner:
      'https://media.kitsu.app/manga/38/poster_image/large-676b91b69b775c6c240c41dbf8106d03.jpeg',
    startDate: new Date('1997-07-22'),
    ranking: 1,
    rating: 4,
  },
  {
    slug: 'naruto',
    title: 'Naruto',
    banner: 'https://media.kitsu.app/manga/35/poster_image/7f4e275e7e43c5d7cbfe969e9bbe203d.jpg',
    startDate: new Date('1999-09-21'),
    ranking: 8,
    rating: 4,
  },
  {
    slug: 'bleach',
    title: 'Bleach',
    banner:
      'https://media.kitsu.app/manga/37/poster_image/large-4f4237a25573f67e17c7b69e33767ed2.jpeg',
    startDate: new Date('2001-08-07'),
    ranking: 36,
    rating: 4,
  },
  {
    slug: 'death-note',
    title: 'Death Note',
    banner:
      'https://media.kitsu.app/manga/57/poster_image/large-c45932b7d7e5981ad4afb466befd7434.jpeg',
    startDate: new Date('2003-12-03'),
    ranking: 9,
    rating: 5,
  },
];

// Page.
export default function LandingPage() {
  return (
    <main className="my-8 space-y-8">
      {/* Featured Mangas */}
      <section
        id="featured"
        className="scroll-m-48 space-y-6 px-4 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]"
      >
        <SectionHeader
          icon={FaStar}
          title="Handpicked Favorites"
          subtitle="Discover timeless favorites and underrated gems, chosen just for you. These titles set the bar — in story, art, and impact."
        />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] place-items-center gap-8 gap-y-12">
          {mangas.map((manga) => (
            <MangaCard key={manga.slug} {...manga} />
          ))}
        </div>
      </section>

      {/* Trending Mangas */}
      <section id="trending" className="bg-secondary scroll-m-48">
        <div className="space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]">
          <SectionHeader
            icon={FaFire}
            title="Trending this week"
            subtitle="These manga are dominating reader interest this week. See what the hype is about."
          />

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] place-items-center gap-8 gap-y-12">
            {mangas.map((manga) => (
              <MangaCard key={manga.slug} {...manga} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse Mangas */}
      <section
        id="browse"
        className="scroll-m-48 space-y-6 px-4 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]"
      >
        <SectionHeader
          icon={FaChrome}
          title="Discover Manga"
          subtitle="Dive into our full collection of manga — searchable, scrollable, and always growing."
          buttonLink="/browse"
        />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] place-items-center gap-8 gap-y-12">
          {mangas.map((manga) => (
            <MangaCard key={manga.slug} {...manga} />
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="bg-secondary scroll-m-48">
        <div className="space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]">
          <SectionHeader
            icon={MdAttachEmail}
            title="Get in Touch"
            subtitle="Whether you want to request a manga, suggest a feature, or just say hello — we’d love to hear from you. "
          />

          <div className="flex w-full items-center justify-around gap-8">
            <ContactForm />

            <div className="hidden max-w-[560px] flex-1 place-items-center md:grid">
              <Image alt="Mailbox Illustration" src={MailBox} className="w-4/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Creator */}
      <section
        id="creator"
        className="flex scroll-m-48 items-center justify-around px-4 md:px-8 xl:justify-evenly 2xl:mx-auto 2xl:max-w-[1440px]"
      >
        <div className="hidden max-w-[480px] flex-1 place-items-center md:grid">
          <Image alt="Creator Image" src={Creator} className="w-4/5" />
        </div>

        <article className="max-w-[560] flex-1 space-y-12 md:space-y-6 2xl:m-auto 2xl:max-w-[1440px]">
          <header className="relative">
            <H4>Meet the Creator</H4>
            <H1 className="text-primary">Zain Khoso</H1>

            <Image
              alt="Zain Ul Abdin"
              src={Creator}
              width={120}
              height={120}
              className="absolute -top-4 right-0 md:hidden"
            />
          </header>

          <div className="space-y-6">
            <P>
              I'm a self-taught web developer from Pakistan with over two years of professional
              experience. Currently I am working as a freelancer. I built Manga Trench out of my
              love for manga and technology — combining design, development, and discovery into one
              meaningful platform.
            </P>

            <ul className="flex items-center gap-4">
              <li className="grid h-12 w-12 place-items-center">
                <Link href="/" target="_blank">
                  <FaGithub size={24} />
                </Link>
              </li>
              <li className="grid h-12 w-12 place-items-center">
                <Link href="/" target="_blank">
                  <FaXTwitter size={24} />
                </Link>
              </li>
              <li className="grid h-12 w-12 place-items-center">
                <Link href="/" target="_blank">
                  <FaLinkedin size={24} className="fill-[#0077B5]" />
                </Link>
              </li>
              <li className="grid h-12 w-12 place-items-center">
                <Link href="/" target="_blank">
                  <FaMedium size={24} />
                </Link>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaCheck className="min-w-8" />

                <P className="!m-0">2+ Years of Real-World Experience.</P>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="min-w-8" />

                <P className="!m-0">Built 10+ Projects from Scratch.</P>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="min-w-8" />

                <P className="!m-0">Active Contributor to Learning Communities.</P>
              </li>
            </ul>
          </div>

          <ButtonLink href="mailto:zain.khoso.dev@gmail.com">Contact Me</ButtonLink>
        </article>
      </section>
    </main>
  );
}
