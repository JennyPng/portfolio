export interface CardProps {
  title: string;
  description: string | string[];
  dates?: string;
  image_paths?: string[]; // show slideshow if multiple
  type_to_link?: {
    type: "github" | "website" | "blog" | "email";
    link: string;
  }[] // map link to icon
  buttons?: {
    text: string;
    link: string;
  }[]
  footer?: string;
  className?: string;
  tags?: string[]; 
  drag?: boolean
}

const formatText = (text: string | string[]) => {
  const lines = Array.isArray(text) ? text : text.split('\n');
  return lines.map((line, i) => {
    const boldParts = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // for bold parts, also check for italics
        const boldText = part.slice(2, -2);
        const italicParts = boldText.split(/(\*.*?\*)/g).map((italicPart, k) => {
          if (italicPart.startsWith('*') && italicPart.endsWith('*')) {
            return <em key={k}><strong>{italicPart.slice(1, -1)}</strong></em>;
          }
          return <strong key={k}>{italicPart}</strong>;
        });
        return <span key={j}>{italicParts}</span>;
      }
      // For non-bold parts, check for italics
      const italicParts = part.split(/(\*.*?\*)/g).map((italicPart, k) => {
        if (italicPart.startsWith('*') && italicPart.endsWith('*')) {
          return <em key={k}>{italicPart.slice(1, -1)}</em>;
        }
        return italicPart;
      });
      return <span key={j}>{italicParts}</span>;
    });
    // TODO allow links
    return <p key={i} className="text-sm">{boldParts}</p>;
  });
};

export default function Card({ title, description, image_paths, type_to_link, buttons, footer, className }: CardProps) {
  return (
    <div className={`card flex-col border-2 my-4 mx-4 border-primary-green bg-color-background rounded-lg p-3 w-[70vw] md:min-w-[25vw] md:max-w-[300px] lg:w-[450px] duration-170 hover:shadow-[-4px_3px_0px_0px] hover:shadow-primary-green ${className || ''}`}>
      <div className="flex-col">
        <p className="pb-2 text-md">{title}</p>
        <hr className="border-1 -mx-3 border-primary-green" />
      </div>
      
      <div className="grid gap-2 pt-4 min-h-[200px] max-h-[600px]">
        {formatText(description)}
      </div>
      {
        buttons && (
          <div className="flex-row pb-4">
            {
              buttons.map((button) => {
                return(
                  <a href={button.link} target="_blank" rel="noopener noreferrer"><button className="text-tertiary-green bg-primary-green justify min-w-fit p-2 mr-4 mt-2 flex-1 rounded-lg duration-170 hover:bg-secondary-green hover:text-background hover:cursor-pointer" key={button.text}>{button.text}</button></a>
                )
            })
            }
          </div>
        )
      }
      {footer && ( 
        <div className="card-footer"> 
          <hr className="border-1 -mx-3 border-primary-green" />
          <p className="text-sm text-primary-green">{footer}</p>
        </div>
      )}
    </div>
  );
}
