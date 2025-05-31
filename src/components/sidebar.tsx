import { Briefcase, House, Linkedin, Inbox, Atom, Settings, School } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/lo%C3%AFck-caillon-6a6aa919a/",
    icon: Linkedin,
  },
  {
    title: "Inbox",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=loick.ca@gmail.com",
    icon: Inbox,
  },
  {
    title: "ArtStation",
    url: "https://www.artstation.com/decnox",
    icon: Atom,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const navItems = [
    {
    title: "Home",
    url: "# ",
    icon: House,
  },
    {
    title: "Experiences",
    url: "#experiences",
    icon: Briefcase,
  },
    {
    title: "Degrees",
    url: "#degrees",
    icon: School,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Contacts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
