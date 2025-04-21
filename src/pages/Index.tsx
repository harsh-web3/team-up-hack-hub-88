
import { Header } from "@/components/Header";
import { TeammateFinder } from "@/components/TeammateFinder";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      <Header />
      <main className="pb-16">
        <TeammateFinder />
      </main>
    </div>
  );
};

export default Index;
