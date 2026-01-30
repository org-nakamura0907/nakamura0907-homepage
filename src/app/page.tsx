import { Typography } from '@/shared/components/typography';
import { SITE_SHORT_TITLE } from '@/shared/config';

export default function Home() {
  return (
    <div>
      <Typography.H1>{SITE_SHORT_TITLE}</Typography.H1>
    </div>
  );
}
