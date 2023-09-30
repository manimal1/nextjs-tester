import classNames from 'classnames';
import {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
  type ReactElement as ReactElementBase,
  type Ref as ReactRef,
  type RefAttributes as ReactRefAttributes,
  forwardRef,
  HTMLAttributes,
} from 'react';

import type { IconSize } from './Icon';
import { Icon } from './Icon';
import { ScreenReaderText } from '../typography/ScreenReaderText';
import { ThreeDotsLoader } from '../feedback/ThreeDotsLoader';

declare module 'react' {
  function forwardRef<TElement, TProps = {}>(
    render: (props: TProps, ref: ReactRef<TElement>) => ReactElementBase | null,
  ): (props: ReactRefAttributes<TElement> & TProps) => ReactElementBase | null;
}

const iconSizes: Record<ButtonSize, IconSize> = {
  lg: 6,
  md: 5,
  sm: 5,
};

export type ButtonAppearance = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'lg' | 'md' | 'sm';

export type ButtonProps<
  TProps extends HTMLAttributes<HTMLElement> = ComponentPropsWithoutRef<'button'>,
> = Omit<TProps, 'ref'> & {
  children: ReactNode;
  appearance?: ButtonAppearance;
  disabled?: boolean;
  leadingIcon?: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  loading?: boolean;
  size?: ButtonSize;
  trailingIcon?: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  type?: 'button' | 'reset' | 'submit';
};

export const Button = forwardRef(function Button<
  TProps extends HTMLAttributes<HTMLElement> = ComponentPropsWithoutRef<'button'>,
>(
  {
    className,
    children,
    disabled = false,
    leadingIcon,
    loading = false,
    appearance = 'primary',
    size = 'md',
    trailingIcon,
    type = 'button',
    ...props
  }: ButtonProps<TProps>,
  ref: ReactRef<HTMLButtonElement>,
) {
  const isTextChildren = typeof children === 'string';

  const hasIcon = Boolean(leadingIcon || trailingIcon);

  const classes = classNames(
    'shrink-0 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-default focus:outline-none transition border focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 rounded',
    {
      'font-medium p-2': isTextChildren,
      'p-1.5': hasIcon && size === 'sm',
      'p-2': hasIcon && size === 'md',
      'p-3': hasIcon && size === 'lg',
      relative: loading || hasIcon,
      'bg-primary text-primary-content border-transparent shadow-sm': appearance === 'primary',
      'btn-secondary': appearance === 'secondary',
      'btn-tertiary': appearance === 'tertiary' && !disabled,
      'hover:bg-primary-focus focus:ring-primary': appearance === 'primary' && !disabled,
      'text-sm': size === 'sm' || size === 'md',
      'text-primary-content': appearance === 'primary',
    },
    className,
  );
  const iconClasses = classNames('flex-none', {
    'text-base-content': appearance === 'secondary',
    'translate-x-0.5': hasIcon,
    'translate-x-0': !hasIcon,
  });
  const contentClasses = classNames('flex-1 flex items-center', {
    'justify-center': !hasIcon,
    '-translate-x-2.5': leadingIcon,
    invisible: loading,
  });

  return (
    <button ref={ref} type={type} disabled={disabled} className={classes} {...props}>
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <ScreenReaderText>Loading</ScreenReaderText>
          <Icon icon={ThreeDotsLoader} aria-hidden={true} />
        </span>
      ) : null}

      <span className={contentClasses}>
        {leadingIcon ? (
          <Icon
            icon={leadingIcon}
            className={iconClasses}
            size={iconSizes[size]}
            aria-hidden={true}
          />
        ) : null}
        {children}
        {trailingIcon ? (
          <Icon
            icon={trailingIcon}
            className={iconClasses}
            size={iconSizes[size]}
            aria-hidden={true}
          />
        ) : null}
      </span>
    </button>
  );
});
