import b1 from "./assets/bandeiras/b-01.svg";
import b2 from "./assets/bandeiras/b-02.svg";
import b3 from "./assets/bandeiras/b-03.svg";
import b4 from "./assets/bandeiras/b-04.svg";
import b5 from "./assets/bandeiras/b-05.svg";
import b7 from "./assets/bandeiras/b-07.svg";
import b6 from "./assets/bandeiras/b-06.svg";
import b8 from "./assets/bandeiras/b-08.svg";

const flags = [b1, b2, b3, b4, b5, b6, b7, b8];

const Flags = () => {
  return (
    <div className="flex gap-3 scroll-pr-3 pb-2 overflow-x-auto justify-between">
      {flags.map((F, index) => (
        <img src={F} key={index} />
      ))}
    </div>
  );
};

export default Flags;
