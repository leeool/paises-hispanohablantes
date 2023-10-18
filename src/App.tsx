import "./app.css";
import CopyToClipboardContainer from "./CopyToClipboardButton";
import { Calendar, Clock } from "lucide-react";
import Flags from "./Flags";

function App() {
  return (
    <div className="max-w-xl p-2 md:p-4 my-0 mx-auto flex flex-col gap-5 h-screen">
      <Flags />
      <div className="grid gap-2">
        <h1 className="text-4xl md:text-5xl font-bold text-shadow">
          <span className="text-blue">Evento</span>{" "}
          <span className="text-yellow">de Países</span>{" "}
          <span className="text-red">Hispanohablantes</span>
        </h1>
        <p className="text-green font-medium">ETEC Adolpho Berezin</p>
      </div>

      <div className="grid gap-2">
        <h2 className="text-blue font-medium">Programação</h2>
        <ul className="flex flex-col gap-3">
          <li className="bg-yellow flex p-2 text-xl text-white font-medium rounded-md">
            Exposição das barracas
          </li>
          <li className="bg-blue flex p-2 text-xl text-white font-medium rounded-md">
            Apresentação dos contos
          </li>
          <li className="bg-red flex p-2 text-xl text-white font-medium rounded-md">
            Dia dos mortos
          </li>
        </ul>
      </div>

      <div className="flex self-center content-center items-center mt-20">
        <a href="https://forms.gle/6X8benpZeoAGTWWr6" target="_blank">
          <button className="bg-yellow text-lg py-2 px-5 rounded-md text-blue font-medium shadow-[#ed8e83_-2px_2px] hover:shadow-[#ed8e83_-4px_4px] transition-shadow">
            Inscrever-se
          </button>
        </a>
      </div>

      <div className="grid justify-items-center content-center gap-2">
        <CopyToClipboardContainer>
          https://paiseshisphablantes.netlify.app
        </CopyToClipboardContainer>
        <p className="text-gray-500">Convide seus amigos!</p>
      </div>

      <div className="grid justify-items-center gap-2 items-end content-start flex-1 mt-10">
        <div className="flex bg-blue font-medium py-2 px-4 rounded-md text-white gap-2 items-center">
          <Calendar size={20} />
          <p>26 de outubro de 2023</p>
        </div>
        <div className="flex bg-blue font-medium py-2 px-4 rounded-md text-white gap-2 items-center">
          <Clock size={20} />
          <p>das 10h às 16h</p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm">
        Este site foi desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/leonardo-gonsalez/"
          target="_blank"
          className="text-red hover:underline"
        >
          Leonardo Gonsalez
        </a>
      </p>
    </div>
  );
}

export default App;
