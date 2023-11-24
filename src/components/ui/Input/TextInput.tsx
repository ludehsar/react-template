import classNames from 'classnames';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  register: UseFormRegister<any>;
  label: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  leftIcon,
  rightIcon,
  register,
  label,
  ...props
}) => {
  return (
    <div
      className={classNames(className, 'inline-flex h-14 w-full items-center')}
    >
      {leftIcon && leftIcon}
      <input
        className="form-input m-2 w-full flex-1 border-0 border-transparent bg-transparent text-md outline-none focus:border-transparent focus:outline-none focus:ring-0"
        {...register(label, {
          required: props.required,
          shouldUnregister: true,
          valueAsNumber: props.type === 'number',
        })}
        {...props}
      />
      {rightIcon && rightIcon}
    </div>
  );
};
