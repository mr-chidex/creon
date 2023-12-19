import { NavBar } from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-Jost">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}
