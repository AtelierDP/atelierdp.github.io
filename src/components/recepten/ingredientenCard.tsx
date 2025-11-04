
import type { CollectionEntry } from 'astro:content';
import TagList from '../generic/taglist';
import { Typography } from '@material-tailwind/react';

interface IngredientenCardProps {
    ingredienten: Array<{ ingredient: string; qty: string }>; 
}

const IngredientenCard: React.FC<IngredientenCardProps> = ({ ingredienten }) => {

//console.log("ReceptCard recept: ", recept.data);

return (
  <div className="pt-4"> 
    <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            {/* 
            <a href={url} className="block">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {recept.data.title}
                </h3>
            </a>
            */}
            <Typography variant="h5" className="mb-4">
                Ingrediënten
            </Typography>
            <ul className="divide-y divide-gray-200">
                {ingredienten.map(({ ingredient, qty }, idx) => (
                    <li key={idx} className="grid grid-cols-2 items-center py-2">
                        <span className="text-left">{ingredient}</span>
                        <span className="text-right">{qty}</span>
                    </li>
                ))}
            </ul>
    
            {/* 
    <p className="text-gray-600 mb-4">{recept.data.description}</p>
    
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>Gepubliceerd: {formattedDate}</span>
      <span>Door: {recept.data.author}</span>
    </div>
            */}

{/*
    <a href={url} className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-medium">
      Lees meer &rarr;
    </a>
    */}
{/*
<Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-blue-50">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {recept.data.pubDate}
        </Typography>
      </CardHeader>
      <CardBody className="grid justify-center text-center">
        
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold" >
          {recept.data.title}
        </Typography>
        <Typography className="px-8 font-normal text-gray-700" >
          {recept.rendered}
        </Typography>
      </CardBody>
    </Card>
    */}

  </div>
</div>
</div>
);
}

export default IngredientenCard;
