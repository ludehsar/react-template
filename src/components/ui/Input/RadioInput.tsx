import classNames from 'classnames';
import { UseFormSetValue } from 'react-hook-form';
import { Button } from '../Button';

export interface RadioInputProps {
  setValue: UseFormSetValue<any>;
  label: string;
  title: string;
  value: string;
  selected: boolean;
  className?: string;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  className,
  setValue,
  label,
  title,
  selected,
  value,
}) => {
  return (
    <Button
      variant={selected ? 'primary' : 'outlined'}
      type="button"
      className={classNames(
        className,
        'h-[34px] w-[210px] !justify-center font-serif text-md font-medium leading-[130%]',
      )}
      onClick={() => setValue(label, value)}
    >
      {title}
    </Button>
  );
};
