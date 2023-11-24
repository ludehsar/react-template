import classNames from 'classnames';
import React from 'react';

export interface StepperProps {
  steps: number;
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-17 inline-flex items-center">
      {Array.from(Array(steps)).map((_, ind) => (
        <div key={ind} className="flex items-center">
          <div
            className={classNames(
              currentStep >= ind + 1
                ? 'bg-primary font-bold text-white'
                : 'font-medium text-primary-dark text-opacity-[0.12] dark:text-white dark:text-opacity-[0.25]',
              'flex h-11 w-11 items-center justify-center rounded-full font-serif text-lg leading-[150%] tracking-[-0.24px]',
            )}
          >
            {ind + 1}
          </div>
          {ind + 1 !== steps && (
            <div
              className={classNames(
                'w-[147px] border-b ',
                currentStep > ind + 1
                  ? 'border-primary'
                  : 'border-primary-dark border-opacity-[25%] dark:border-white dark:border-opacity-[12%]',
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};
