import ReactLogo from "./image.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>Feliç dia de reis!</h1>
    </header>
  );
}

export default Header;
