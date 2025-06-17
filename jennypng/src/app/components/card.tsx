interface CardProps {
  title: string;
  description: string;
  image_paths?: string[];
  type_to_link?: {
    type: "github" | "website" | "blog" | "email";
    link: string;
  }[]
  footer?: string;
}

export default function Card({ title, description, image_paths, type_to_link, footer }: CardProps) {
  return (
    <div className="card border-2 border-primary-green bg-color-background rounded-lg p-4 min-w-[300px]" >
      <p className="">{title}</p>
      <hr className="border-1 border-primary-green -mx-4" />
      <p className="text-sm">{description}</p>
      <hr className="border-1 border-primary-green -mx-4" />
      <p className="text-sm">{footer}</p>
    </div>
  );
}
