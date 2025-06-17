import Card from "./card";
import cardsData from "../data/cards.json";

export default function Intro() {
  return (
    <div>
      <Card {...cardsData.intro} />
    </div>
  );
}
