import { ComponentProps } from 'react';
import { cn } from '../lib/utils';

function TypographyH1({ className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance', className)}
      {...props}
    />
  );
}
function TypographyP({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />;
}
function TypographyLarge({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-lg font-semibold', className)} {...props} />;
}
function TypographySmall({ className, ...props }: ComponentProps<'small'>) {
  return <small className={cn('text-sm leading-none font-medium', className)} {...props} />;
}

/**
 * Typographyコンポーネント
 * @see https://ui.shadcn.com/docs/components/radix/typography#p
 */
export const Typography = Object.assign(TypographyP, {
  H1: TypographyH1,
  Large: TypographyLarge,
  Small: TypographySmall,
});
