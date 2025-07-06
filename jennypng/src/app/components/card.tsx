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

  // parse bold + italic in a string fragment
  const parseFormatting = (input: string, keyPrefix: string) => {
    const boldParts = input.split(/(\*\*.*?\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const innerBold = part.slice(2, -2);
        const italicParts = innerBold.split(/(\*.*?\*)/g).map((italicPart, j) => {
          if (italicPart.startsWith('*') && italicPart.endsWith('*')) {
            return <em key={`${keyPrefix}-b${i}-i${j}`}><strong>{italicPart.slice(1, -1)}</strong></em>;
          }
          return <strong key={`${keyPrefix}-b${i}-t${j}`}>{italicPart}</strong>;
        });
        return <span key={`${keyPrefix}-b${i}`}>{italicParts}</span>;
      }

      const italicParts = part.split(/(\*.*?\*)/g).map((italicPart, j) => {
        if (italicPart.startsWith('*') && italicPart.endsWith('*')) {
          return <em key={`${keyPrefix}-i${i}-j${j}`}>{italicPart.slice(1, -1)}</em>;
        }
        return italicPart;
      });

      return <span key={`${keyPrefix}-n${i}`}>{italicParts}</span>;
    });

    return boldParts;
  };

  return lines.map((line, lineIndex) => {
    // Step 1: split into link and non-link parts
    const segments = line.split(/(\[.*?\]\(.*?\))/g).map((segment, segIndex) => {
      const match = segment.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, linkText, linkHref] = match;
        const parsedLinkContent = parseFormatting(linkText, `link-${lineIndex}-${segIndex}`);
        return (
          <a
            key={`link-${lineIndex}-${segIndex}`}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal hover:bg-teal-dark duration-170"
          >
            {parsedLinkContent}
          </a>
        );
      }

      // Otherwise, it's normal text with possible formatting
      return (
        <span key={`text-${lineIndex}-${segIndex}`}>
          {parseFormatting(segment, `text-${lineIndex}-${segIndex}`)}
        </span>
      );
    });

    return <p key={lineIndex} className="text-sm">{segments}</p>;
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

  return (
    <div className={`card flex-col border-2 border-primary-green bg-secondary-background rounded-lg max-h-fit my-2 max-w-[${width}px] md:my-0 p-3 duration-170 hover:shadow-[-4px_3px_0px_0px] hover:shadow-primary-green ${className || ''}`}>
      <div className="flex-col">
        <div className="pb-2 flex flex-row justify-between">
          <p className="text-md">{title}</p>
          {dates &&           
            <p className="text-sm text-primary-green pt-1 pr-2">{formattedStartDate != formattedEndDate ? `${formattedStartDate} - ${formattedEndDate}` : formattedStartDate}</p>
          }
        </div>
        <hr className="border-1 -mx-3 border-primary-green" />
      </div>

      {image_paths && <Image src={image_paths[0].image_path} width={800} height={300} alt={image_paths[0].image_alt} className="pt-4 object-contain max-h-[350px]"></Image>}
      
      <div className="grid gap-2 pt-4 pb-2 max-h-[600px]">
        {formatText(description)}
      </div>
      {
        buttons && (
          <div className="flex-row pb-4">
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
