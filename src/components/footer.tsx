import { Typography } from '@/shared/ui/typography';
import { SITE_TITLE } from '@/shared/config';

export default function Footer() {
  return (
    <footer className="text-center">
      <Typography.Small>
        <span>&copy; {SITE_TITLE}</span>
      </Typography.Small>
    </footer>
  );
}
