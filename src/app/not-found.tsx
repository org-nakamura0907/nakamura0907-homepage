'use client';

import Footer from '@/components/footer';
import { Button } from '@/shared/ui/button';
import Shuffle from '@/shared/ui/Shuffle';
import { Typography } from '@/shared/ui/typography';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-grow justify-center items-center gap-8">
        <Typography.H1>
          <Shuffle
            text="404 not found"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop
            loopDelay={1}
          />
        </Typography.H1>

        <Button variant="link" asChild className="w-fit">
          <Link href="/">HOME</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
