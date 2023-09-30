import classNames from 'classnames';

type SkeletonColor = 'gray' | 'white';

const colors: Record<SkeletonColor, string> = {
  gray: 'bg-gray-300 dark:bg-gray-600',
  white: 'bg-white dark:bg-white',
};

export interface SkeletonProps {
  className?: string;
  color?: 'gray' | 'white';
  shape?: 'circle' | 'rect';
}

export function Skeleton({ className, color = 'gray', shape = 'rect' }: SkeletonProps) {
  const classes = classNames(
    'inline-flex rounded-full h-1/2 w-4/5 animate-pulse filter blur-md overflow-hidden',
    { 'scale-y-50': shape === 'rect' },
    colors[color],
    className,
  );

  return (
    <div className="flex items-center justify-center w-full h-full">
      <span className={classes} />
    </div>
  );
}
