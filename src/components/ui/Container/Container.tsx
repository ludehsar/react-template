import classNames from 'classnames';
import React from 'react';

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        className,
        'flex flex-col items-center justify-center gap-4',
      )}
    >
      {children}
    </section>
  );
};
