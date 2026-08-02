import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <div className="container row">
        <h1>devFinder</h1>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
}
