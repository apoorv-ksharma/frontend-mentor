import localFont from 'next/font/local';

const groteskMedium = localFont({
  src: '../fonts/SpaceGrotesk-Medium.ttf',
  variable: '--font-space-grove-medium',
  weight: '100 900',
});

const groteskBold = localFont({
  src: '../fonts/SpaceGrotesk-Bold.ttf',
  variable: '--font-space-grove-bold',
  weight: '100 900',
});

const groteskVariable = localFont({
  src: '../fonts/SpaceGrotesk-VariableFont_wght.ttf',
  variable: '--font-space-grove-variable',
  weight: '100 900',
});

export default function ConnectFourLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${groteskMedium.variable} ${groteskBold.variable} ${groteskVariable.variable} w-full h-[100vh] bg-offWhite flex justify-center items-center`}
    >
      {children}
    </div>
  );
}
