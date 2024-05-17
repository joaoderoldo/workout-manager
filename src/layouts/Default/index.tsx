import { ReactComponent as Logo } from "@/assets/img/logo.svg";

import { DefaultLayoutProps } from "@/layouts/Default/types";

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row font-default">
      <aside className="w-full shrink-0 border-r border-r-secondary bg-secondary p-8 pb-0 md:min-h-full lg:w-64 lg:pb-8">
        <Logo />
        <span className="text-center block mt-6 text-lg text-gray-300">
          Workout Manager
        </span>
      </aside>
      <div className="min-h-screen w-full">{children}</div>
    </main>
  );
};

export default DefaultLayout;
