import React from 'react';

interface TagListProps {
    tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
    return (
        <div className="tag-list">
            {/*
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    #{tag} 
                </span> 
            ))}
                */}

        {tags.map((tag) => (
        // Link naar de dynamische tag-pagina: /tags/[tag-naam]
        <a 
          href={`/tags/${tag}`} 
          className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
        >
          #{tag}
        </a>
      ))}
            
        </div>
    );
}

export default TagList;
