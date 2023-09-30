import classNames from 'classnames';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { type Size, sizeAttributes, sizeClasses } from '../../utils/size';

export type IconSize = Extract<Size, 'full' | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12>;

export const defaultIconSize = 5;

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  size?: IconSize;
}

export function Icon({ className, icon: SvgIcon, size = defaultIconSize, ...props }: IconProps) {
  const classes = classNames(sizeClasses[size], 'flex-none', className);

  return <SvgIcon className={classes} {...sizeAttributes[size]} {...props} />;
}
