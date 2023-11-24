import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Chip } from '../Chip';

export interface RightDrawerProps {
  open: boolean;
  chipText: string;
  title: string;
  children: React.ReactNode;
  closeMenu: () => void;
}

export const RightDrawer: React.FC<RightDrawerProps> = ({
  open,
  children,
  chipText,
  title,
  closeMenu,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={open}
        onClose={closeMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-transparent" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
                  <div className="shadow-xl flex h-full flex-col overflow-y-scroll bg-primary-dark bg-opacity-[6%] py-6 backdrop-blur-[50px]">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="flex flex-col items-center gap-3 font-serif text-lg font-bold leading-[130%] text-primary-dark dark:text-white">
                        <Chip
                          variant="primary"
                          size="small"
                          className="rounded-md font-serif text-xs font-medium normal-case leading-[14px] text-primary"
                        >
                          {chipText}
                        </Chip>
                        <div>{title}</div>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
