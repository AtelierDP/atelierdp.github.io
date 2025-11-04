
import type { CollectionEntry } from 'astro:content';
import { Typography } from '@material-tailwind/react';

interface InstructiesCardProps {
    instructies: Array<string>; 
}

const InstructiesCard: React.FC<InstructiesCardProps & { children?: React.ReactNode }> = ({children}) => {

//console.log("ReceptCard recept: ", recept.data);

return (
    <div className="pt-4"> {/* Added spacing around each ReceptCard */}
        <div className="bg-gray-50  shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
             <Typography variant="h5" className="mb-4">
                 Recept
             </Typography>
    
                {children} 
            </div>
        </div>
    </div>
);
}

export default InstructiesCard;