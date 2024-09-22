import Image from 'next/image';
import pic from '../images/illustration-article.svg';
import avatar from '../images/image-avatar.webp';

export default function BlogPreviewCard() {
  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center bg-yellow gap-8'>
        {[0].map((_, index) => {
          return (
            <main
              key={index}
              className='bg-white p-5 rounded-2xl border-solid border-black border-[1px] flex gap-4 flex-col max-w-[350px] shadow-[8px_8px_0_0_rgba(0,0,0)]'
            >
              <Image src={pic} alt='Card Image' width={500} height={300} className='rounded-xl' />
              <span className='px-2 py-1 bg-yellow w-fit rounded-md font-figtree font-bold text-xs'>
                Learning
              </span>
              <h3 className='font-figtree font-medium text-xs'>Published 21 Dec 2023</h3>
              <h1 className='font-figtree font-extrabold text-xl'>HTML &#38; CSS foundations</h1>
              <p className='font-figtree text-grayLight text-sm'>
                These languages are the backbone of every website, defining structure, content and
                presentation.
              </p>
              <div className='flex flex-row gap-3 items-center'>
                <Image src={avatar} alt='Avatar' width={30} height={30} />
                <h2 className='font-figtree font-bold text-sm'>Greg Hooper</h2>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
}
