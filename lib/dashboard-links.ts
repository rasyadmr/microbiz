import {
  LayoutDashboard,
  LucideIcon,
  ChartArea,
  FileText
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.endsWith("/dashboard"),
          icon: LayoutDashboard,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Produk",
      menus: [
        {
          href: "/dashboard/analysis",
          label: "Analisis",
          active: pathname.endsWith("/dashboard/analysis"),
          icon: ChartArea,
        },
        {
          href: "/dashboard/tax",
          label: "Pajak",
          active: pathname.endsWith("/dashboard/tax"),
          icon: FileText
        }
      ]
    },
    // {
    //   groupLabel: "Settings",
    //   menus: [
    //     {
    //       href: "/account",
    //       label: "Akun",
    //       active: pathname.endsWith("/account"),
    //       icon: Settings
    //     }
    //   ]
    // }
  ];
}