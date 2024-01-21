/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../@typings/polymorphic';

export type ButtonProps<C extends React.ElementType> =
    PolymorphicComponentPropWithRef<C>;

export type ButtonComponent = <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>
) => React.ReactElement | null;

const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
      const { as, children, ...rest } = props;
      const Component = as || 'button';
      return (
        <Component ref={ref} {...rest}>
          {children}
        </Component>
      );
    },
);
export default Button;
