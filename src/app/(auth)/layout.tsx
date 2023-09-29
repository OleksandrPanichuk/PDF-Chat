import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <main className='h-full w-full flex items-center justify-center pt-4'>{children}</main>;
};

export default AuthLayout;
