import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import type { CollectionEntry } from "astro:content";
import LinkWithIcon from "../generic/link-with-icon";

interface BlogCardProps {
  post: CollectionEntry<'posts'>;
}

const BlogCard: React.FC<BlogCardProps> = ({post}) => {
  return (
    <div className="border-2 border-sky-600 bg-blue-gray-50 rounded-lg m-2  p-4 
          shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl" >
      <div className="mx-auto mb-4 grid h-20 w-20 ">
        <Typography client:only="react" 
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {post.data.publishDate.toLocaleDateString("nl-be")}
        </Typography>
      </div>
        <div className="grid justify-center text-center">
          <Typography client:only="react" 
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {post.data.title}
        </Typography>
        <Typography client:only="react" 
          className="px-8 font-normal text-gray-700"
        >
          {post.body}
        </Typography>
        </div>
        <div className="">
          <LinkWithIcon text={`Lees meer`} href={`/blog/${post.data.slug}`} />
        </div>
      
      </div>
  );
}

export default BlogCard;
