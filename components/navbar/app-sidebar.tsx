import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { data } from "@/config/nav-config"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { ModeToggle } from "./ThemeButton"

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="floating" rounded={true}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
                <ModeToggle />
            </SidebarFooter>
        </Sidebar>
    )
}
