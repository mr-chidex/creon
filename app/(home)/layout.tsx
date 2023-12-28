import { NavBar } from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-Roboto">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
