export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-[480px] flex justify-center items-center flex-col gap-4 bg-CFPurple border-CFBlack p-10 rounded-3xl border-[3px] shadow-CFDefault'>
      {children}
    </div>
  );
}
