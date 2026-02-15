'use client';

import { Typography } from '@/shared/ui/typography';
import { SITE_SHORT_TITLE } from '@/shared/config';
import DecryptedText from '@/shared/ui/DecryptedText';
import ScrollIndicator from '@/shared/ui/scroll-indicator';
import { useRef } from 'react';

export default function Home() {
  const scrollNextRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="min-h-svh flex flex-col justify-center">
        <div className="text-center">
          <Typography.Large>WEB ENGINEER</Typography.Large>
          <Typography.H1>
            <DecryptedText text={SITE_SHORT_TITLE} animateOn="both" sequential />
          </Typography.H1>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator targetRef={scrollNextRef} />
        </div>
      </div>

      <div className="min-h-svh flex flex-col justify-center" ref={scrollNextRef}>
        <div className="text-center">comming soon...</div>
      </div>
    </>
  );
}
