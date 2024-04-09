'use client';

// Lib Imports.
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');

  const handleSubmit = function (event: FormEvent) {
    event.preventDefault();

    console.log('The query reads: ', query);
  };

  return (
    <form
      className="flex items-center bg-white p-2 rounded-lg focus-within:outline outline-slate-600"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className=" w-full h-full text-slate-800 font-medium focus:outline-none placeholder:text-slate-400"
      />
      <button type="submit">
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          alt="Search Icon"
        />
      </button>
    </form>
  );
}
