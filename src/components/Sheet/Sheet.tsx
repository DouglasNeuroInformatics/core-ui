import { Close, Portal, Root, Trigger } from '@radix-ui/react-dialog';

import { SheetBody } from './SheetBody';
import { SheetContent } from './SheetContent';
import { SheetDescription } from './SheetDescription';
import { SheetFooter } from './SheetFooter';
import { SheetHeader } from './SheetHeader';
import { SheetOverlay } from './SheetOverlay';
import { SheetTitle } from './SheetTitle';

export const Sheet = Object.assign(Root.bind(null), {
  Body: SheetBody,
  Close,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Portal,
  Title: SheetTitle,
  Trigger
});
