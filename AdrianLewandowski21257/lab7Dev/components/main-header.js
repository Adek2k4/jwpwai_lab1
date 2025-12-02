import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background.js';

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/meals', label: 'Posiłki' },
  { href: '/meals/share', label: 'Udostępnij' },
  { href: '/community', label: 'Społeczność' },
];

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="NextLevel Food logo" width={64} height={64} priority />
        <span>NextLevel Food</span>
      </Link>

      <nav className={classes.nav}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    </>
  );
}
