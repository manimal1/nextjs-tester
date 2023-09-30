import classNames from 'classnames';

export interface ErrorMessageProps {
  children?: string[] | string;
  className?: string;
  id?: string;
}

export function ErrorMessage({ children, className, id }: ErrorMessageProps) {
  if (children === undefined) {
    return null;
  }

  const classes = classNames('text-sm text-error mt-0', className);

  const content =
    typeof children === 'string' ? (
      children
    ) : (
      <ul>
        {children.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );

  if (typeof children === 'string') {
    return (
      <p className={classes} id={id}>
        {content}
      </p>
    );
  }

  return (
    <div className={classes} id={id}>
      {content}
    </div>
  );
}
