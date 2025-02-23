import { ComponentProps, FC } from 'react';


export interface LayoutProps extends ComponentProps<'div'> {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  


  return (
    <div>
      {children}
    </div>
  );
};
