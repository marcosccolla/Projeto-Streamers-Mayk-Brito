import "../index.css";
import Section from "../components/Section";

import {
  ListItemSection1,
  ListItemSection2,
  ListItemSection3,
} from "./constants";

export default function Home() {
  return (
    <main>
      <Section
        class="games-list"
        listitem={ListItemSection1}
        titulo="Meus jogos"
        subtitulo="Os games que mais curto jogar"
      />
      <Section
        class="channel-list"
        listitem={ListItemSection2}
        titulo="Canais e streamers"
        subtitulo="Lista de canais e transmições que não perco!"
      />
      <Section
        class="social-list"
        listitem={ListItemSection3}
        titulo="Minhas redes"
        subtitulo="Se conecte comigo agora mesmo!"
        width="30px"
        height="30px"
      />
    </main>
  );
}
