import React, { forwardRef } from 'react';
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../@typings/polymorphic';

export type HeadingProps<C extends React.ElementType> =
    PolymorphicComponentPropWithRef<C>;

export type HeadingComponent = <C extends React.ElementType = 'span'>(
    props: HeadingProps<C>
) => React.ReactElement | null;

const Heading: HeadingComponent = forwardRef(
    <C extends React.ElementType = 'h1'>(
    props: HeadingProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
      const { as, children, ...rest } = props;
      const Component = as || 'h1';
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component ref={ref} {...rest}>
          {children}
        </Component>
      );
    },
);
export default Heading;
