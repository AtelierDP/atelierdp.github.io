import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

import type { CollectionEntry } from "astro:content";
import BlogCard from "./blogCard";

interface BlogSectionProps {
  posts: Array<CollectionEntry<'posts'>>; 
}


/*
const features = [
  {
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Check our team",
    description:
      "For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "Support 24/7",
    description:
      "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Unlimited revisions",
    description:
      "We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love.",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Payments functionality",
    description:
      "Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Improved platform",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Prebuilt components",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];
*/

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {

  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography client:load="react" variant="h2" color="blue-gray" className="mb-4">
          Laatste blogposts
        </Typography>
        <Typography client:load="react"
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          Work like playing. Play like working. Don't be afraid to be ambitious about your goals. Hard work always pays off, and dreams come true.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((item) => (
          <div key={item.id} >
            <BlogCard key={item.id} post={item} />
            </div>
      ))}
            </div>
  </section>
  );
}

export default BlogSection;
