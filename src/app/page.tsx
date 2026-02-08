'use client';

import { Typography } from '@/shared/ui/typography';
import { SITE_SHORT_TITLE } from '@/shared/config';
import DecryptedText from '@/shared/ui/DecryptedText';

export default function Home() {
  return (
    <div className="text-center">
      <Typography.Large>WEB ENGINEER</Typography.Large>
      <Typography.H1>
        <DecryptedText text={SITE_SHORT_TITLE} animateOn="both" sequential />
      </Typography.H1>
    </div>
  );
}
