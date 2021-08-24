import React, { useState } from 'react';
import { Button } from '../Button/Button';

interface SearchInputProps {
  title?: string | undefined;
  placeHolder?: string | undefined;
  onSubmit: (value: any) => any;
  hasButton?: boolean | undefined | any;
  buttonText?: string | undefined;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  buttonText,
  hasButton,
  placeHolder,
  title,
  onSubmit,
}) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div
          className={hasButton && 'flex items-center justify-between w-full'}
        >
          <div className='flex flex-col w-full'>
            {title && <h1 className='text-left font-light mb-8'>{title}</h1>}
            <input
              className='bg-white border-2 border-black focus:border-gray-500 py-3 px-4 placeholder-gray-500 w-full text-black'
              type='text'
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeHolder}
            />
          </div>
          {hasButton && (
            <div>
              <Button btnType='primary' type='submit'>
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
