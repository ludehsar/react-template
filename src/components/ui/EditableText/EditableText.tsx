import classNames from 'classnames';
import React, { KeyboardEventHandler, useEffect, useState } from 'react';

export interface EditableTextProps {
  onInputChange: (value: string) => void;
  placeholder?: string;
  textClassName?: string;
  title?: string;
  focus: boolean;
  changeFocus: (shouldFocus: boolean) => void;
}

export const EditableText: React.FC<EditableTextProps> = ({
  onInputChange,
  placeholder,
  textClassName,
  title,
  focus,
  changeFocus,
}) => {
  const [inputText, setInputText] = useState<string>(title || '');

  const handleBlur = () => {
    changeFocus(false);
  };

  const handleEnterKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      handleBlur();
      onInputChange(inputText);
    }
  };

  // useEffect(() => {
  //   onInputChange(inputText);
  // }, [inputText]);

  useEffect(() => {
    if (title) {
      setInputText(title);
    }
  }, [title]);

  if (focus) {
    return (
      <input
        className="ring-none !m-0 mr-4 w-full flex-1 rounded-md border-0 border-transparent bg-secondary-2 !p-2 text-lg leading-[115%] tracking-[-0.24px] text-primary-dark placeholder-secondary outline-none focus:border-transparent focus:outline-none focus:ring-0 dark:bg-card-dark-bg dark:text-white"
        onChange={(e) => setInputText(e.currentTarget.value)}
        placeholder={placeholder}
        onBlur={handleBlur}
        onKeyDown={handleEnterKeyPress}
        autoFocus
        value={inputText}
      />
    );
  }

  return (
    <h1
      className={classNames(
        'mr-4 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-lg leading-[115%] tracking-[-0.24px] text-primary-dark dark:text-white',
        !title && '!text-opacity-50',
        textClassName,
      )}
      onClick={() => changeFocus(true)}
      onFocus={() => changeFocus(true)}
    >
      {title && title.length > 0 ? title : placeholder}
    </h1>
  );
};
