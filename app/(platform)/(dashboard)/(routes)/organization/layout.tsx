import { ListTodo } from "lucide-react";
import { MobileSidebarOrg } from "../../_components/mobile-sidebar-org";
import { SidebarOrg } from "../../_components/sidebar-org";


const OrganizationLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="pt-8 md:pt-8 px-2 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold ml-4 flex items-center"><ListTodo className="mr-2" />Task</h1>
      <h2 className="text-lg ml-4 text-gray-400">Efficient project management with todo lists</h2>
      <br/>
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <SidebarOrg />
        </div>
        <div className="justify-center items-center w-full">
        <MobileSidebarOrg /> 
        <br/>
        {children}
        </div>
       
      </div>
    </main>
  );
};

export default OrganizationLayout;
