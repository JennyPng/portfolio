import Card from "./card";
import cardsData from "../data/cards.json";

export default function Intro({className} : {className?: string}) {
  return (
    <div className="intro">
      <Card {...cardsData.intro} maxWidth={400} className={`${className}`} />
    </div>
  );
}
 