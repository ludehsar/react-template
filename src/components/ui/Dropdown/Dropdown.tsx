import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface DropdownProps {
  dropdownButton: JSX.Element;
  dropdownItems: {
    label: string;
    icon?: JSX.Element;
    href?: string;
    onClick?: () => void;
  }[];
  dropdownItemRenderer: (
    dropdownItem: {
      label: string;
      icon?: JSX.Element;
      href?: string;
      onClick?: () => void;
    },
    active: boolean,
  ) => React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  dropdownButton,
  dropdownItems,
  dropdownItemRenderer,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{dropdownButton}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="shadow-lg absolute right-0 mt-2 w-[180px] origin-top-right divide-y divide-dark-bg rounded-md bg-[#ECECED] p-2 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#242425]">
          <div className="px-1 py-1">
            {dropdownItems.map((item, index) => {
              const RenderedComp: React.FC<{ active: boolean }> = ({
                active,
              }) => dropdownItemRenderer(item, active);
              return (
                <Menu.Item key={index}>
                  {({ active }) => <RenderedComp active={active} />}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
