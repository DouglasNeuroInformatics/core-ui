import { cn } from '../../utils.js';

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
};
