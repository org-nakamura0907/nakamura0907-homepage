import Footer from '@/components/footer';
export { metadata } from '@/shared/config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header></header>
      <div className="max-w-screen-xl mx-auto flex-grow flex flex-col w-full">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
