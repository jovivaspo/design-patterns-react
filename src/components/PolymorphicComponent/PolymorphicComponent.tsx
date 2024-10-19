import { ComponentProps, createElement, ElementType, FC } from 'react';

export type PolymorphicComponentProps<T extends ElementType> = {
  as: T;
  children: React.ReactNode;
} & ComponentProps<T>;

const PolymorphicComponent: FC<PolymorphicComponentProps<ElementType>> = ({ as: Component = 'div', children, ...props }) => createElement(Component, props, children);

export default PolymorphicComponent;
