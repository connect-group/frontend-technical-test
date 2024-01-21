import React, { forwardRef } from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../@typings/polymorphic';

export type TextProps<C extends React.ElementType> =
    PolymorphicComponentPropWithRef<C>;

export type TextComponent = <C extends React.ElementType = 'span'>(
    props: TextProps<C>
) => React.ReactElement | null;

const Text: TextComponent = forwardRef(
    <C extends React.ElementType = 'span'>(
    props: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
      const { as, children, ...rest } = props;
      const Component = as || 'span';
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component ref={ref} {...rest}>
          {children}
        </Component>
      );
    },
);
export default Text;
