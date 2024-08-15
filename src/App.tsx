import { About, Cursos, Contact } from "./components";
import plin from "./assets/plin.jpeg";

function App() {
  return (
    <div className="relative flex flex-col gap-8 bg-[#8DA8BF] text-[#FFFFFF]">
      <div className="fixed right-10 bottom-8 flex flex-col items-center">
        <h1 className="relative font-serif italic">
          Colabora para que esta página siga creciendo :D
        </h1>
        <img src={plin} width={180} />
      </div>
      <About />
      <Cursos />
      <div className="bg-red-400">
        <Contact />
      </div>
    </div>
  );
}

export default App;
