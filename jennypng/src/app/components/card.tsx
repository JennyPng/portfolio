export interface CardProps {
  title: string;
  description: string | string[];
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
    
    return <p key={i} className="text-sm">{boldParts}</p>;
  });
};

export default function Card({ title, description, image_paths, type_to_link, buttons, footer, className }: CardProps) {
  return (
    <div className={`card border-2 border-primary-green bg-color-background rounded-lg p-2 min-w-[300px] max-w-[400px] grid gap-3 hover:shadow-[-4px_3px_0px_0px] hover:shadow-primary-green ${className || ''}`}>
      <div className="grid gap-2">
        <p className="p-0">{title}</p>
        <hr className="border-1 -mx-2 border-primary-green" />
      </div>
      
      <div className="grid gap-2">
        {formatText(description)}
      </div>
      
      {footer && (
        <>
          <hr className="border-1 border-primary-green" />
          <p className="text-sm">{footer}</p>
        </>
      )}
    </div>
  );
}
