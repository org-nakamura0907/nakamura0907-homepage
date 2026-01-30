import { SITE_SHORT_TITLE } from '@/shared/config';

export default function Home() {
  return (
    <h1 className="text-center mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
      {SITE_SHORT_TITLE}
    </h1>
  );
}
