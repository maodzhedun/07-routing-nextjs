import React from 'react';
import Link from 'next/link';
import TagsMenu from '@/components/TagsMenu/TagsMenu';
import { fetchNotes } from '@/lib/api';

import css from './Header.module.css';

async function Header() {
  const params = { page: 1, search: '', tags: undefined };
  const { notes } = await fetchNotes(params);
  const tags = notes.map(note => note.tag).flat();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
