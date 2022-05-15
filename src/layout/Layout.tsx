interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="h-screen w-full justify-center">{children}</main>;
};

export default MainLayout;
