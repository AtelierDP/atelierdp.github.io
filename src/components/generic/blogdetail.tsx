import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface BlogItemProps {
  title: string;
  description?: string;
  date: string | Date;
  publishDate: string | Date;
  readingTime?: string;
  excerpt: string;
  slug: string;
  html: string
}

function BlogItemCard ({
  title,
  description,
  publishDate,
  readingTime,
  date,
  excerpt,
  slug,
  html
}: BlogItemProps) {
  const formattedDate =
    typeof date === "string" ? new Date(date).toLocaleDateString() : date.toLocaleDateString();

  return (
    <section className="py-8 px-8 lg:py-20">

    <article className="border rounded-lg p-6 shadow-md hover:shadow-lg transition py-8 px-8 lg:py-20">
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-2">
        <a href={`/blog/${slug}`} className="text-blue-gray-600 hover:underline">
          {title}
        </a>
      </h2>
      <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <p className="text-gray-700 mb-4">{html}</p>
      <a
        href={`/blog/${slug}`}
        className="inline-block text-sm text-white bg-blue-gray-600 px-4 py-2 rounded hover:bg-blue-gray-700"
      >
        Lees meer →
      </a>
      </div>
    </article>
    </section>
    
  );
};

export default BlogItemCard;
