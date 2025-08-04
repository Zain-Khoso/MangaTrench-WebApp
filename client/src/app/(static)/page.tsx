// Lib Imports.
import Image from 'next/image';
import Link from 'next/link';

// Assets.
import Creator from '@/assets/brand/creator.png';
import { FaStar, FaFire, FaChrome, FaGithub } from 'react-icons/fa';
import {
  FaMedium,
  FaXTwitter,
  FaLinkedin,
  FaCheck,
  FaMagnifyingGlassArrowRight,
} from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';

// Components.
import SectionHeader from '@/components/static/SectionHeader';
import HeaderUIContainer from '@/components/static/HeaderUIContainer';
import ContactForm from '@/components/static/ContactForm';
import MangaCard from '@/components/MangaCard';
import TextHighlight from '@/components/TextHighlight';
import MailBox from '@/components/svgs/MailBox';
import { Button, ButtonLink } from '@/components/shadcn/button';
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

// Landing page of the application.
export default function LandingPage() {
  return (
    <>
      <HeaderUIContainer id="home">
        <H1>
          Find, Rate, and Talk <TextHighlight>Manga</TextHighlight> — All in One{' '}
          <TextHighlight>Trench</TextHighlight>.
        </H1>

        <P>
          Discover thousands of manga, share your thoughts, and connect with fans worldwide — all
          from your personal manga hub.
        </P>

        <ul className="mt-8 hidden items-center justify-evenly gap-8 md:flex">
          <li className="flex w-full flex-col items-center gap-4">
            <div className="bg-secondary aspect-video w-full rounded-xl"></div>
            <H4 className="font-bold">Browse</H4>
          </li>
          <li className="flex w-full flex-col items-center gap-4">
            <div className="bg-secondary aspect-video w-full rounded-xl"></div>
            <H4 className="font-bold">Review</H4>
          </li>
          <li className="flex w-full flex-col items-center gap-4">
            <div className="bg-secondary aspect-video w-full rounded-xl"></div>
            <H4 className="font-bold">Chat AI</H4>
          </li>
        </ul>

        <div className="mt-12 flex items-center gap-4 md:mt-8">
          <ButtonLink href="/browse">
            Browse <FaMagnifyingGlassArrowRight />
          </ButtonLink>
          <Button variant="ghost">Sign In</Button>
        </div>
      </HeaderUIContainer>

      <main className="space-y-8">
        {/* Featured Mangas */}
        <section id="featured" className="bg-secondary scroll-m-48">
          <div className="space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]">
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
          </div>
        </section>

        {/* Trending Mangas */}
        <section
          id="trending"
          className="scroll-m-48 space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]"
        >
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
        </section>

        {/* Browse Mangas */}
        <section id="browse" className="bg-secondary scroll-m-48">
          <div className="space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]">
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
          </div>
        </section>

        {/* Contact Us */}
        <section
          id="contact"
          className="scroll-m-48 space-y-6 px-4 py-6 md:px-8 2xl:mx-auto 2xl:max-w-[1440px]"
        >
          <SectionHeader
            icon={MdAttachEmail}
            title="Get in Touch"
            subtitle="Whether you want to request a manga, suggest a feature, or just say hello — we’d love to hear from you. "
          />

          <div className="flex w-full items-center justify-around gap-8">
            <ContactForm />

            <div className="hidden max-w-md flex-1 place-items-center md:grid">
              <MailBox />
            </div>
          </div>
        </section>

        {/* Creator */}
        <section id="creator" className="bg-secondary scroll-m-48">
          <div className="flex items-center justify-around px-4 py-6 md:px-8 xl:justify-evenly 2xl:mx-auto 2xl:max-w-[1440px]">
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
                  love for manga and technology — combining design, development, and discovery into
                  one meaningful platform.
                </P>

                <ul className="flex items-center gap-4">
                  <li className="grid h-12 w-12 place-items-center">
                    <Link href="https://www.linkedin.com/in/zain-khoso/" target="_blank">
                      <FaLinkedin size={24} className="fill-[#0077B5]" />
                    </Link>
                  </li>
                  <li className="grid h-12 w-12 place-items-center">
                    <Link href="https://github.com/Zain-Khoso" target="_blank">
                      <FaGithub size={24} />
                    </Link>
                  </li>
                  <li className="grid h-12 w-12 place-items-center">
                    <Link href="https://x.com/Zain_Khoso_Dev" target="_blank">
                      <FaXTwitter size={24} />
                    </Link>
                  </li>
                  <li className="grid h-12 w-12 place-items-center">
                    <Link href="https://medium.com/@zain.khoso.dev" target="_blank">
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
          </div>
        </section>
      </main>
    </>
  );
}
