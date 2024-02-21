import { About, Cursos, Contact } from "./components";

function App() {
  return (
    <div className="flex flex-col gap-8 bg-[#8DA8BF] text-[#FFFFFF]">
      <About />
      <Cursos />
      <div className="bg-red-400">
        <Contact />
      </div>
    </div>
  );
}

export default App;
