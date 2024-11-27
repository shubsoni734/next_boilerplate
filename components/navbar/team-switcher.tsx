"use client"

import * as React from "react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import config from "@/config/color-config.json";

export function TeamSwitcher({
    teams,
}: {
    teams: {
        name: string
        logo: string
        // logo: React.ElementType
        plan: string
    }[]
}) {
    const { isMobile, open } = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(teams[0])

    return (
        <SidebarMenu>
            <SidebarMenuItem className="flex justify-center items-center">
                {open ?
                    <Image className="w-20 h-20" width={40} height={40} alt="logo" src={config.navText.logoBig} /> :
                    <Image className="w-20 h-20" width={40} height={40} alt="logo" src={config.navText.logoSmall} />
                }
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
