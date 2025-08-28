// app/notes/filter/@sidebar/default.tsx
import React from 'react';
import Link from 'next/link';
import { fetchNotes } from '@/lib/api';

import css from './SidebarNotes.module.css';

const NoteSidebar = async () => {
  const params = { page: 1, search: '', tags: undefined };
  const { notes } = await fetchNotes(params);
  const tags = notes.map(note => note.tag).flat();
  const uniqueTags = Array.from(new Set(tags));

  return (
    <div>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>
            All
          </Link>
        </li>
        {uniqueTags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteSidebar;
