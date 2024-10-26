import { renderHook } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import { mockStorage } from '../testing/mocks.js';
import { useLocalStorage } from './useLocalStorage.js';

mockStorage('localStorage');

vi.mock('../utils.js', () => ({ isBrowser: vi.fn(() => true) }));

describe('useLocalStorage()', () => {
  it('should render', () => {
    renderHook(() => useLocalStorage('key', 'value'));
  });
});
