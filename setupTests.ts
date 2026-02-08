import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.stubGlobal(
  'IntersectionObserver',
  class {
    observe = vi.fn();
    disconnect = vi.fn();
    unobserve = vi.fn();
    takeRecords = vi.fn(() => []);
  }
);
