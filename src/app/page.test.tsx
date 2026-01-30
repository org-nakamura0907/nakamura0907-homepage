import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { SITE_SHORT_TITLE } from '@/shared/config';

test('Page', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1, name: SITE_SHORT_TITLE })).toBeDefined();
});
