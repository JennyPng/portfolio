import Card from "./card";
import cardsData from "../data/cards.json";

export default function Intro({className} : {className?: string}) {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center">
      <div className="relative z-10 w-full flex items-center justify-center">
        <Card {...cardsData.intro} maxWidth={400} className={`${className}`} />
      </div>
    </div>
  );
}
 