
import type { CollectionEntry } from 'astro:content';
import TagList from '../generic/taglist';
import LinkWithIcon from '../generic/link-with-icon';
import { LeesMeerButton } from '../generic/lees-meer-button';

interface ReceptCardProps {
  recept: CollectionEntry<'recepten'>; 
}

const ReceptCard: React.FC<ReceptCardProps> = ({ recept }) => {
// Formatteer de datum
const formattedDate = recept.data.publishDate.toLocaleDateString('nl-BE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Optioneel: de slug gebruiken om de URL te maken
const url = `/blog/recepten/${recept.data.slug}`;

//console.log("ReceptCard recept: ", recept.data);

return (
  <div className="p-4" key={recept.id}> {/* Added spacing around each ReceptCard */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl">
  <div className="p-6">
    <a href={url} className="block">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
        {recept.data.title}
      </h3>
    </a>
    
    <p className="text-gray-600 mb-4">{recept.data.description}</p>
    
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>Gepubliceerd: {formattedDate}</span>
      <span>Door: {recept.data.author}</span>
    </div>

    <TagList tags={recept.data.tags} />

    <LeesMeerButton href={url} />
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

export default ReceptCard;
