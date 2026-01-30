import { SITE_TITLE } from '@/shared/config';

export default function Footer() {
  return (
    <footer className="text-center">
      <small>
        <span>&copy; {SITE_TITLE}</span>
      </small>
    </footer>
  );
}
