import { Cursos, Contact } from "./components";

function App() {
  return (
    <div className="flex flex-col p-32 gap-8 bg-[#8DA8BF] text-[#FFFFFF]">
      <div className="w-auto">
        <Cursos />
      </div>
      <Contact />
    </div>
  );
}

export default App;
