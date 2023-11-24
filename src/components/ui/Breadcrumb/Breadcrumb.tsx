import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbProps {
  navigations: { title: string; href: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ navigations }) => {
  return (
    <div className="inline-flex items-center justify-between gap-4">
      {navigations.map((navigation, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-between gap-2"
        >
          <Link to={navigation.href}>
            <h4 className="text-blue text-xs">{navigation.title}</h4>
          </Link>
          {index != navigations.length - 1 && (
            <h4 className="text-blue text-xs">/</h4>
          )}
        </div>
      ))}
    </div>
  );
};
