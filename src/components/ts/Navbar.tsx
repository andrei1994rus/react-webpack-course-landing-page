import { useState, useEffect } from 'react';
import { scrollTo } from '../../utils/Scroll';
import '../css/Navbar.css';

const navLinks = [
  { label: 'О курсе', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <nav className={`${scrolled ? 'nav scrolled' : 'nav'}`}>
      <div className="nav__wrap">
        <a href="#">
          <div className="nav__wrap__logo__brand">CI</div>
          <span>
            Code<span>Intensive</span>
          </span>
        </a>
        <div className="nav__wrap__nav-desktop">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleLink(link.href)}>
              {link.label}
            </button>
          ))}
          <button onClick={() => handleLink('#register')}>Записаться</button>
        </div>
        <button
          className="nav__wrap__nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${menuOpen ? 'show' : ''}`} />
          <span className={`${menuOpen ? 'show' : ''}`} />
          <span className={`${menuOpen ? 'show' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="nav__wrap__mobile-menu">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleLink(link.href)}>
              {link.label}
            </button>
          ))}
          <button onClick={() => handleLink('#register')}>Записаться</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
