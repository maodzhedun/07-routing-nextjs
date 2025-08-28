'use client';

import { useState } from 'react';
import css from './TagsMenu.module.css';
import Link from 'next/link';

interface TagsMenuProps {
  tags: string[];
}

const TagsMenu = ({ tags = [] }: TagsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Ensure tags are unique
  const uniqueTags = Array.from(new Set(tags));

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href={`/notes/filter/all`}
              onClick={toggle}
              className={css.menuLink}
            >
              All
            </Link>
          </li>
          {uniqueTags.map(tag => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={`/notes/filter/${tag}`}
                onClick={toggle}
                className={css.menuLink}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
