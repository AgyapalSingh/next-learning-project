import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link href="/">W.</Link>
        </div>

        <nav className="header-nav">
          <ul>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">CTA</div>
      </div>
    </header>
  );
};

export default Header;
