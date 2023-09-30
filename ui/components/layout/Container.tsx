import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  appearance?: 'default' | 'narrow';
  padded?: boolean;
}

export function Container({ className, children }: ContainerProps) {
  const classes = classNames('mx-auto py-4 xs:px-2 sm:px-4 lg:px-6', className);

  return <div className={classes}>{children}</div>;
}
