import { About, Cursos, Contact } from "./components";

function App() {
  return (
    <div className="flex flex-col gap-16 bg-[#8DA8BF] text-[#FFFFFF]">
      <About />
      <div className="w-auto px-48">
        <Cursos />
      </div>
      <div className="bg-red-400">
        <Contact />
      </div>
    </div>
  );
}

export default App;
