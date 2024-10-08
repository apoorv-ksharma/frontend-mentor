'use client';

export default function Input({
  label,
  onChange,
  value,
  isError,
  errMsg,
  placeholder,
  type,
  pattern,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  isError: boolean;
  errMsg: string;
  placeholder: string;
  type: string;
  pattern: string;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={label}
        className={`font-bold-poppins uppercase tracking-[0.15rem] md:tracking-[0.2rem] ${
          isError ? 'text-lightRed' : 'text-smokeyGrey'
        } font-bold md:text-sm text-xs`}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={`font-bold-poppins outline-none px-4 py-3 md:py-4 md:px-6 border-solid border-[1px] rounded-md ${
          isError ? 'border-lightRed' : 'border-lightGrey'
        } w-24 md:w-40 font-black text-xl md:text-3xl`}
        placeholder={placeholder}
        id={label}
        type={type}
        pattern={pattern}
      ></input>
      {!!errMsg && <p className='font-poppins text-lightRed'>{errMsg}</p>}
    </div>
  );
}
