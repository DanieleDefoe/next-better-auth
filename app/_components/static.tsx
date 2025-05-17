export const revalidate = 30;

export default function StaticComponent() {
  return (
    <div>
      <header>
        <h1>Static Component</h1>
        <p>This is a static component</p>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
