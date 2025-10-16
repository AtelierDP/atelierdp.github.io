import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";


const features = [
  {
    icon: (
      <img className="w-48 mx-auto mb-4" src="icon1.png" />
    ),
    title: "Over software & design",
    description:
      "Software, architectuur, ontwikkeling, automatisatie: van idee tot implementatie.",
  },
  {
    icon: (
      <img className="w-48 mx-auto mb-4" src="icon2.png" />
    ),
    title: "Over eten en drinken",
    description:
      "Omdat eten en drinken een primaire levensbehoefte is. Recepten, brood, drank en meer.",
  },
  {
    icon: (
      <img className="w-48 mx-auto mb-4" src="icon3.png" />
    ),
    title: "Over maken en doen",
    description:
      "Creatief bezig zijn met hout, 3D printen, laser-cutting en andere technieken.",
  }
];

/***
 * Rendering a feature card
 */


/**
 * Feature card component - rendering of a block of content with icon, title and description
 * @param icon - The icon to display at the top of the card
 * @param title - The title of the feature
 * @param children - The description of the feature
 * @returns A React component representing a feature card
 */

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

/**
 * Feature landing section component
 * @returns A React component representing the feature landing section
 */
export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="dark" className="text-xl mr-2 font-normal">
            Voor liefhebbers van eigenzinnige projecten.
            <br />
            Want zelf gemaakt is zoveel leuker. Of lekkerder. Of gewoon beter.
          </Typography>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
