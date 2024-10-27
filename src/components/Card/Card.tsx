'use client';

import { CardContent } from './CardContent.js';
import { CardDescription } from './CardDescription.js';
import { CardFooter } from './CardFooter.js';
import { CardHeader } from './CardHeader.js';
import { CardRoot } from './CardRoot.js';
import { CardTitle } from './CardTitle.js';

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle
});
