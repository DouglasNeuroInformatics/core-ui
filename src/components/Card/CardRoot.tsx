import { cn } from '../../utils.js';

export const CardRoot: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
    data-testid="card"
    {...props}
  />
);
