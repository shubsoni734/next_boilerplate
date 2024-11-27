"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import colors from "@/config/color-config.json";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { IconFinder } from "../ui/Iconfinder"
import { data } from "@/config/nav-config"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: string
        isSubMenu?: boolean
        // icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel>{colors.navText.hoverColor}</SidebarGroupLabel> */}
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                {item.isSubMenu ?
                                    <SidebarMenuButton tooltip={item.title} >
                                        {item.icon && <IconFinder name={item.icon} />}
                                        {/* {item.icon && <item.icon />} */}
                                        {/* <span className={`text-[${colors.navText.textColor}]`}>{item.title}</span> */}
                                        <span >{item.title}</span>
                                        {item.isSubMenu &&
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        }
                                    </SidebarMenuButton>
                                    :
                                    <a href={item.url}>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <IconFinder name={item.icon} />}
                                            {/* {item.icon && <item.icon />} */}
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </a>
                                }
                            </CollapsibleTrigger>
                            {item.isSubMenu &&
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <a href={subItem.url}>
                                                        <span>{subItem.title}</span>
                                                    </a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            }
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup >
    )
}
