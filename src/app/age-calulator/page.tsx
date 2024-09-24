'use client';

import Input from '@/components/input';
import Image from 'next/image';
import arrow from '../images/icon-arrow.svg';
import { useCallback, useState } from 'react';

function Text({ number, label }: { number: string | null; label: string }) {
  return (
    <div className='flex flex-row gap-2 md:gap-2 md:mb-2'>
      <div className='text-purple font-extra-bold-italic-poppins text-6xl md:text-[104px] text-nowrap'>
        {number ? number : '--'}
      </div>
      <div className='text-offBlack font-extra-bold-italic-poppins text-6xl md:text-[104px]'>
        {label}
      </div>
    </div>
  );
}

type AgeDate = {
  day: string;
  month: string;
  year: string;
};

const ageDate = () =>
  JSON.parse(
    JSON.stringify({
      day: '',
      month: '',
      year: '',
    })
  ) as AgeDate;

export default function AgeCalulator() {
  const [errors, setError] = useState<AgeDate | null>(null);
  const [date, setDate] = useState<AgeDate>(ageDate());
  const [age, setAge] = useState<AgeDate>(ageDate());

  const validateNumber = useCallback(({ text, label }: { text: string; label: string }) => {
    if (text.length === 0) return 'This field is required';

    const isNumber = !Number.isNaN(Number(text));

    if (!isNumber) return `Must be a valid ${label}`;

    return null;
  }, []);

  const validate = useCallback(() => {
    try {
      const currentAge = ageDate();
      let isError = false;

      Object.keys(date).forEach((key) => {
        const error = validateNumber({ text: date[key as keyof AgeDate], label: key });

        if (error) {
          isError = true;
          setError((prev) => {
            if (prev) return { ...prev, [key]: error };

            const errorData = ageDate();

            return { ...errorData, [key]: error };
          });
        }
      });

      const enteredDate = new Date(Number(date.year), Number(date.month) - 1, Number(date.day));

      const currentDate = new Date();

      if (Number(date.day) > new Date(Number(date.year), Number(date.month), 0).getDate()) {
        isError = true;

        setError((prev) => {
          if (prev) return { ...prev, day: 'Must be a valid day' };

          const errorData = ageDate();

          return { ...errorData, day: 'Must be a valid day' };
        });
      }

      if (Number(date.month) > new Date(Number(date.year), 0, 0).getMonth()) {
        isError = true;

        setError((prev) => {
          if (prev) return { ...prev, month: 'Must be a valid month' };

          const errorData = ageDate();

          return { ...errorData, month: 'Must be a valid month' };
        });
      }

      if (Number(date.year) > new Date().getFullYear()) {
        isError = true;

        setError((prev) => {
          if (prev) return { ...prev, year: 'Must be in past' };

          const errorData = ageDate();

          return { ...errorData, year: 'Must be in past' };
        });
      }

      if (enteredDate.getTime() > currentDate.getTime()) {
        isError = true;

        Object.keys(date).forEach((key) => {
          isError = true;
          setError((prev) => {
            if (prev) return { ...prev, [key]: 'Must be in past' };

            const errorData = ageDate();

            return { ...errorData, [key]: 'Must be in past' };
          });
        });
      }

      if (Number.isNaN(enteredDate.getTime())) {
        isError = true;

        Object.keys(date).forEach((key) => {
          isError = true;
          setError((prev) => {
            if (prev) return { ...prev, [key]: `Must be a valid ${key}` };

            const errorData = ageDate();

            return { ...errorData, [key]: `Must be a valid ${key}` };
          });
        });
      }

      if (isError) return;

      setError(null);

      console.log(currentDate.getMonth(), enteredDate.getMonth());

      currentAge.year = `${currentDate.getFullYear() - enteredDate.getFullYear()}`;
      currentAge.month = `${currentDate.getMonth() - enteredDate.getMonth()}`;
      currentAge.day = `${currentDate.getDate() - enteredDate.getDate()}`;

      if (Number(currentAge.month) < 0) {
        currentAge.year = `${Number(currentAge.year) - 1}`;
        currentAge.month = `${Number(currentAge.month) + 12}`;
      }

      if (Number(currentAge.day) < 0) {
        currentAge.month = `${Number(currentAge.month) - 1}`;
        currentAge.day = `${
          Number(currentAge.day) +
          new Date(enteredDate.getFullYear(), enteredDate.getMonth(), 0).getDate()
        }`;
      }

      console.log(currentAge);

      setAge(currentAge);
    } catch (error: unknown) {
      console.log(error);
    }
  }, [date, validateNumber]);

  const handleDateOnChange = useCallback(({ value, label }: { value: string; label: string }) => {
    if (!label) return;
    setDate((prev) => ({ ...prev, [label]: value ?? '' }));
  }, []);
  return (
    <>
      <main className='md:w-[52.5em] w-[22em] bg-white rounded-br-[7em] md:rounded-br-[14em] rounded-3xl md:px-[3.5em] md:py-[4em] px-[1.5em] py-[3em]'>
        <section className='flex flex-row gap-4 md:gap-8'>
          <Input
            label='day'
            value={date.day}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleDateOnChange({ value: e.target.value, label: 'day' });
            }}
            isError={!!errors}
            errMsg={errors?.day ?? ''}
            placeholder='DD'
            type='number'
            pattern='[0-9]*'
          />
          <Input
            label='month'
            value={date.month}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleDateOnChange({ value: e.target.value, label: 'month' });
            }}
            isError={!!errors}
            errMsg={errors?.month ?? ''}
            placeholder='MM'
            type='number'
            pattern='[0-9]*'
          />
          <Input
            label='year'
            value={date.year}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleDateOnChange({ value: e.target.value, label: 'year' });
            }}
            isError={!!errors}
            errMsg={errors?.year ?? ''}
            placeholder='YYYY'
            type='number'
            pattern='[0-9]*'
          />
        </section>
        <section className='flex flex-row items-center relative h-28 md:h-24'>
          <div className='h-[2px] w-full bg-offWhite'></div>
          <Image
            alt='arrow'
            src={arrow}
            onClick={() => validate()}
            className='translate-x-1/2 md:translate-x-0 hover:bg-offBlack bg-purple p-5 md:p-6 rounded-full absolute right-1/2 md:right-0 w-16 md:w-24'
          />
        </section>
        <section className='flex flex-col mt-5 md:mt-0 gap-1'>
          <Text number={age.year} label='years' />
          <Text number={age.month} label='months' />
          <Text number={age.day} label='days' />
        </section>
      </main>
    </>
  );
}
