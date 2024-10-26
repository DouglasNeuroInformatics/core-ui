import { renderHook } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { mockStorage } from '../testing/mocks.js';
import { useSessionStorage } from './useSessionStorage.js';

mockStorage('sessionStorage');

vi.mock('../utils.js', () => ({ isBrowser: vi.fn(() => true) }));

describe('useSessionStorage()', () => {
  it('should render', () => {
    renderHook(() => useSessionStorage('key', 'value'));
  });
});
