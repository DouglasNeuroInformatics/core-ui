import React from 'react';

import { Root } from '@radix-ui/react-collapsible';

export const CollapsibleRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(function CollapsibleRoot(props, ref) {
  return <Root ref={ref} {...props} />;
});
