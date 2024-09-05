import React from "react";
import { Link } from "react-router-dom";
import { ComponentInfo } from "./DevelopmentApp";

interface IndexPageProps {
  components: ComponentInfo[];
}

export const IndexPage: React.FC<IndexPageProps> = ({ components }) => {
  return (
    <div>
      <ul>
        {components.map(({component, alias}) => {
          return (
            <li>
              <Link to={alias ?? component.type.name}>{alias ?? component.type.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
