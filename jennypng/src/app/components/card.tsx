import Image from "next/image";

export interface CardProps {
  title: string;
  description: string | string[];
  dates?: {
    startMonth: number,
    startYear: number,
    endMonth?: number,
    endYear?: number
  };
  maxWidth?: number,
  image_paths?: {
    image_path: string,
    image_alt: string
  }[]; // show slideshow if multiple
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

export default function Card({ title, description, image_paths, type_to_link, maxWidth, buttons, footer, className, dates }: CardProps) {
  const startDate = dates ? new Date(dates.startYear, dates.startMonth - 1) : undefined;
  const endDate = (dates?.endMonth && dates?.endYear)
    ? new Date(dates.endYear, dates.endMonth - 1)
    : "present";

  const formatDate = (date: Date) =>
    date.toLocaleString("en-US", { month: "short", year: "numeric" }); // e.g., "Apr 2025"

  const formattedStartDate = startDate ? formatDate(startDate) : undefined;
  const formattedEndDate =
    endDate === "present" ? endDate : formatDate(endDate as Date);

  const width = maxWidth ? maxWidth : 500
  console.log(width)

  return (
    <div className={`card flex-col border-2 border-primary-green bg-secondary-background rounded-lg max-h-fit my-2 max-w-[${width}px] md:my-0 p-3 duration-170 hover:shadow-[-4px_3px_0px_0px] hover:shadow-primary-green ${className || ''}`}>
      <div className="flex-col">
        <div className="pb-2 flex flex-row justify-between">
          <p className="text-md">{title}</p>
          {dates &&           
            <p className="text-sm text-primary-green pt-2 pr-2">{formattedStartDate != formattedEndDate ? `${formattedStartDate} - ${formattedEndDate}` : formattedStartDate}</p>
          }
        </div>
        <hr className="border-1 -mx-3 border-primary-green" />
      </div>

      {image_paths && <Image src={image_paths[0].image_path} width={800} height={100} alt={image_paths[0].image_alt} className="pt-4 object-cover"></Image>}
      
      <div className="grid gap-2 pt-4 max-h-[600px]">
        {formatText(description)}
      </div>
      {
        buttons && (
          <div className="flex-row pb-4 pt-1">
            {
              buttons.map((button) => {
                return(
                  <a href={button.link} target="_blank" rel="noopener noreferrer" key={button.text}><button className="text-primary-green border-2 border-primary-green justify min-w-fit p-2 mr-4 mt-2 flex-1 rounded-lg pt-1 pb-1 duration-170 hover:bg-primary-green hover:text-secondary-green hover:cursor-pointer">{button.text}</button></a>
                )
            })
            }
          </div>
        )
      }
      {footer && ( 
        <div className="card-footer"> 
          <hr className="border-1 -mx-3 border-primary-green" />
          <p className="text-sm text-primary-green pt-2">{footer}</p>
        </div>
      )}
    </div>
  );
}
