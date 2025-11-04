import React from "react";
import type { CollectionEntry } from 'astro:content';
import { Typography } from "@material-tailwind/react";

import ReceptCard from "./receptCard";

interface ReceptenSectionProps {
  recepten: Array<CollectionEntry<'recepten'>>; 
}

const ReceptenSection: React.FC<ReceptenSectionProps> = ({ recepten }) => {

return ( 
<section className="">
      <div className="container mx-auto mb-20 text-center">
        <div>Eten maken</div>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Eten maken: een primaire levensbehoefte
        </Typography>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3" >
        { recepten.map((recept) => ( 
        <ReceptCard recept={recept} />
        )) }
      </div>
      
</section>
);
}

export default ReceptenSection;