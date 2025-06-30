import Card from "./card";
import cardsData from "../data/cards.json";

// TODO check t's - would it be better to have this in folders rather than one json?
export default function Projects({className} : {className?: string}) {
    return(
        <div className={`projects ${className}`}>
            <h1 className="text-md grid">projects</h1>
            {
                // TODO - filter and sort
                cardsData.projects.map((project) => {
                    return <Card key={project.title} {...project}></Card>
                })
            }
        </div>
    )
}
