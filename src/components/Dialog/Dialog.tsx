import { Root, Trigger } from '@radix-ui/react-dialog';

import { DialogContent } from './DialogContent.js';
import { DialogDescription } from './DialogDescription.js';
import { DialogFooter } from './DialogFooter.js';
import { DialogHeader } from './DialogHeader.js';
import { DialogTitle } from './DialogTitle.js';

export const Dialog = Object.assign(Root, {
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Title: DialogTitle,
  Trigger
});
