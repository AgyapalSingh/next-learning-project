const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">W.</div>

        <nav className="header-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
            CTA
        </div>
      </div>
    </header>
  );
};

export default Header;
