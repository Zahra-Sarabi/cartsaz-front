import { ChangeEvent, FC } from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input: FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <label className='block mb-2 ms-2' htmlFor={name}>{label}</label>
      <input
        className={className}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
