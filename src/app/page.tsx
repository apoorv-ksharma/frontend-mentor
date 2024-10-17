import Link from 'next/link';

export default function Home() {
  return (
    <div className='p-10 flex gap-2'>
      <Link className='p-2 bg-sky-500 rounded-md text-white' href='/age-calulator'>
        Age Calulator
      </Link>
      <Link className='p-2 bg-sky-500 rounded-md text-white' href='/blog-preview-card'>
        Blog Preview Card
      </Link>
      <Link className='p-2 bg-sky-500 rounded-md text-white' href='/connect-four'>
        Connect Four
      </Link>
    </div>
  );
}
