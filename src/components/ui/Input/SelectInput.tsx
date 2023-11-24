import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';

export interface SingleSelectItemProps {
  label: string | JSX.Element;
  value: string | number;
}

export interface SelectInputProps {
  items: SingleSelectItemProps[];
  onChange: (value: string | number) => void;
  selectedItem?: string | number | null;
  label: string | JSX.Element;
  id?: string;
  className?: string;
  optionClassName?: string;
  height?: number;
  width?: number;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  items,
  selectedItem,
  onChange,
  label,
  id,
  className,
  optionClassName,
  height,
  width,
}) => {
  return (
    <Listbox value={selectedItem} onChange={onChange}>
      <div
        className={classNames(
          `relative h-[${height ? height : 34}px] w-[${width ? width : 210}px]`,
        )}
      >
        <Listbox.Button
          id={id}
          className={classNames(
            'flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-md border border-primary bg-transparent font-serif text-md font-medium leading-[130%] text-primary-dark dark:text-white',
            className,
          )}
        >
          {selectedItem
            ? items.find((item) => item.value === selectedItem)?.label || label
            : label}
          <HiChevronUpDown className="h-5 w-5" aria-hidden="true" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={classNames(
              `shadow-lg scrollbar-hide absolute z-10 mt-1 box-border max-h-[600px] w-[${
                width ? width : 210
              }px] overflow-auto rounded-md border border-primary bg-white py-1 font-serif text-md text-primary-dark ring-1 ring-primary ring-opacity-5 focus:outline-none dark:bg-dark-2 dark:text-white`,
            )}
          >
            {items.length === 0 && (
              <div className="text-center font-serif text-md text-primary-dark dark:text-white">
                No items found.
              </div>
            )}
            {items.map((item) => (
              <Listbox.Option
                key={item.value}
                value={item.value}
                className={({ active }) =>
                  classNames(
                    `relative flex cursor-pointer select-none items-center gap-2 border-b border-primary border-opacity-[16%] py-2 pl-10 pr-4 last:border-none ${
                      active
                        ? 'bg-primary font-medium text-white'
                        : 'font-normal text-primary-dark dark:text-white'
                    }`,
                    optionClassName,
                  )
                }
              >
                {item.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
