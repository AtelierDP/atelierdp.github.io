import LinkWithIcon  from './link-with-icon';

interface LeesMeerButtonProps {
    href: string
}

export const LeesMeerButton: React.FC<LeesMeerButtonProps> = ({ href}) => {
    return (
        <div className="inline-block pt-4">
            <LinkWithIcon 
                href={href}
                text="Lees meer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-600 rounded-lg no-underline transition-all duration-200 ease-in-out hover:shadow-md hover:-translate-y-0.5"
            />
        </div>
    );
};
