import { ComponentProps, ElementType, FC, ReactNode } from 'react';

export type CompoundComponentProps = {
  children?: ReactNode;
  Item?: FC<CompoundComponentItemProps>;
};

export type CompoundComponentItemProps = {
  children?: ReactNode;
};

export type CompoundComponentType = FC<CompoundComponentProps & ComponentProps<ElementType>> & {
  Item: FC<CompoundComponentItemProps & ComponentProps<ElementType>>;
};

const CompoundComponent: CompoundComponentType = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Header: FC<CompoundComponentItemProps & ComponentProps<ElementType>> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>;
};

CompoundComponent.Item = Header;

export default CompoundComponent;
