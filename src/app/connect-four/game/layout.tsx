export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-[100vh] bg-CFPurple flex justify-center items-center relative'>
      {children}
      <div className='absolute w-full h-1/4 bg-CFDarkPurple rounded-t-[60px] bottom-0 z-0'></div>
    </div>
  );
}
