import localFont from 'next/font/local';

const poppinsBold = localFont({
  src: '../fonts/Poppins-Bold.ttf',
  variable: '--font-bold-poppins',
  weight: '100 900',
});
const poppinsExtraBoldItalic = localFont({
  src: '../fonts/Poppins-ExtraBoldItalic.ttf',
  variable: '--font-extra-bold-italic-poppins',
  weight: '100 900',
});
const poppins = localFont({
  src: '../fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
  weight: '100 900',
});
const poppinsItalic = localFont({
  src: '../fonts/Poppins-Italic.ttf',
  variable: '--font-poppins-italic',
  weight: '100 900',
});

export default function AgeCalulatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${poppinsBold.variable} ${poppins.variable} ${poppinsItalic.variable} ${poppinsExtraBoldItalic.variable} w-full h-[100vh] bg-offWhite flex justify-center items-center`}
    >
      {children}
    </div>
  );
}
