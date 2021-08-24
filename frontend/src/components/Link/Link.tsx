import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { ReactNode } from 'react';
import styles from './link.module.css';

interface LinkProps {
  path: string;
  title: string;
  icon?: ReactNode | ReactNode[];
}

export const Link: React.FC<LinkProps> = ({ icon, path, title }) => {
  const { pathname } = useRouter();

  const linkStyles = [styles.link, pathname === path && styles.activeLink]
    .join(' ')
    .trim();

  return (
    <>
      {pathname === path && <span className='activeLink' aria-hidden='true' />}
      <NextLink href={path}>
        <div className={linkStyles}>
          {icon}
          <span>{title}</span>
        </div>
      </NextLink>
    </>
  );
};
