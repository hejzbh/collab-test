import dynamic from "next/dynamic";
// Components
const FlexGroup = dynamic(() => import("@/components/ui/FlexGroup"));
const SidebarToggler = dynamic(
  () => import("@/components/togglers/SidebarToggler")
);
const Logo = dynamic(() => import("@/components/ui/Logo"));
const HeaderActions = dynamic(() => import("./HeaderActions"));

// Props
interface HeaderProps {
  className?: string;
}

const Header = async ({ className = "" }: HeaderProps) => {
  return (
    <header
      className={`shadow-none dark:shadow-xl bg-bgColors-header z-[1000] ${className}`}
    >
      <div className="container h-full flex items-center justify-between">
        {/** Sidebar Toggler & Logo */}
        <FlexGroup>
          <SidebarToggler />
          <Logo size="md" />
        </FlexGroup>

        {/** Header Actions (Theme Toggler / Upload button / User widget & more) */}
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
