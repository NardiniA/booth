import React from 'react';

const parseIcon = (name: string, type?: string): string => {
    switch (type) {
        case "logo":
            return `bxl-${name}`;
        case "solid":
            return `bxs-${name}`;
        default: 
            return `bx-${name}`;
    }
}

const Icon: React.FC<{ 
    name: string,
    type: string
 }> = ({ name, type }) => {
  return <i className={`bx ${parseIcon(name, type)}`}></i>;
}

export default Icon