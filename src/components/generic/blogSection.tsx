import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import type { BlogItem } from "../../pages/blog/index.astro";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  date: string;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ date, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-blue-50">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {date}
        </Typography>
      </CardHeader>
      <CardBody className="grid justify-center text-center">
        
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

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

export function BlogSection({ blogItems }: { blogItems: BlogItem[] }) {
  console.log("BlogItems: ", blogItems)

  return (


    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          Social Analytics
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Turn your idea into a startup
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {blogItems.map(({ data, rendered, id }) => (
          <div>
            <span className="text-sm text-gray-500">{id}</span>
            {/*
          <FeatureCard key={id} date={data.publishDate} title={data.title}>
            {rendered.html}
          </FeatureCard>
          */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
