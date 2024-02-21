import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
  faTwitch,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import clases from "../../../assets/anuncio-clases.png";

interface ContactProps {
  prop?: string;
}

const media = [
  {
    name: faWhatsapp,
    url: "https://wa.link/eei8ku",
  },
  {
    name: faLinkedin,
    url: "https://www.linkedin.com/in/luis-calagua/",
  },
  {
    name: faYoutube,
    url: "https://www.youtube.com/@Mr.Kalu25",
  },
  {
    name: faInstagram,
    url: "https://www.instagram.com/luisc9422/",
  },
  {
    name: faTwitch,
    url: "https://www.twitch.tv/mrkalu25",
  },
  {
    name: faTiktok,
    url: "https://www.tiktok.com/@luiscalagua887",
  },
];
const handleRedirect = (url: string) => {
  window.location.href = url;
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1
        className="
        font-bold text-2xl md:text-6xl"
      >
        Contáctame
      </h1>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg md:text-2xl  mb-4">
            Construye tu camino hacia el éxito con:
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="inline-block transform -rotate-12">
              <span className="bg-blue-800 text-white rounded-full px-3 py-1">
                K
              </span>
            </span>
            aludemy
          </h1>
        </div>
      </div>
    </div>
  );
};
export const Contact: FC<ContactProps> = () => {
  return (
    <div className="flex justify-between gap-8 px-48 py-16">
      <div className="flex flex-col justify-between w-full">
        <ContactInfo />
        <div
          className="flex flex-wrap gap-6 md:justify-between 
          h-auto w-full"
        >
          {media.map((index) => (
            <FontAwesomeIcon
              icon={index.name}
              style={{ color: "#000000", height: 70, cursor: "pointer" }}
              onClick={() => handleRedirect(index.url)}
            />
          ))}
        </div>
      </div>
      <img src={clases} className="hidden md:block h-[400px] w-[300px]" />
    </div>
  );
};

export default Contact;
