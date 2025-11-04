import type { CollectionEntry } from 'astro:content';
import React from 'react';
import ReceptCard from './receptCard';
import IngredientenCard from './ingredientenCard';
import InstructiesCard from './InstructiesCard';
import { Typography } from '@material-tailwind/react';
import TagList from '../generic/taglist';

interface ReceptDetailProps {
    recept: CollectionEntry<'recepten'>
    //title: string;
    //ingredients: string[];
}


const ReceptDetail: React.FC<ReceptDetailProps & { children?: React.ReactNode }> = ({ recept, children }) => {
    
const formattedDate = recept.data.publishDate.toLocaleDateString('nl-BE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

    return (
        <div className="recept-detail p-8">
            <Typography variant="h2" className="mb-4 text-center text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                {recept.data.title}
            </Typography>
            <div className='text-center '>
                <TagList tags={recept.data.tags} />
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Gepubliceerd: {formattedDate}</span>
                    <span>Door: {recept.data.author}</span>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <IngredientenCard ingredienten={recept.data.ingredienten} />
            <InstructiesCard instructies={recept.data.instructies}>
                {children}
            </InstructiesCard>
            </div>
        </div>
    );
};

export default ReceptDetail;