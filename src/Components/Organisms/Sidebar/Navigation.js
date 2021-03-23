import React from "react";
import {
  Home as HomeIcon,
  Store as StoreIcon,
  LocalAtm as LocalAtmIcon,
  Fastfood as FastfoodIcon,
  History as HistoryIcon,
  ShoppingBasketOutlined as ShoppingBasketOutlinedIcon,
  Settings as SettingsIcon
} from "@material-ui/icons";

const navigation = [
  {
    id:1,
    label: "Dashboard",
    link: "/app/#",
    type:"pusat",
    icon: <HomeIcon />,
  },
  {
    id:2,
    label: "Pesanan Hari ini",
    link: "/app/ordernow",
    type:"pusat dan cabang",
    icon: <ShoppingBasketOutlinedIcon />,
  },
  {
    id:3,
    label: "Riwayat Pesanan",
    link: "/app/order/track",
    type:"pusat dan cabang",
    icon: <HistoryIcon />
  },
  {
    id:4,
    label: "Daftar Cabang",
    link: "/app/store/list/0",
    type:"pusat",
    icon: <StoreIcon />,
  },
  {
    id:5,
    label: "Daftar Menu",
    link: "/app/menu/list/pusat/0",
    type:"pusat dan cabang",
    icon: <FastfoodIcon />,
  },
  {
    id:6,
    label: "Pendapatan",
    link: "/app/income",
    type:"cabang",
    icon: <LocalAtmIcon />,
  },
  {
    id:7,
    label: "Pengaturan",
    link: "/app/setting",
    type:"pusat dan cabang",
    icon: <SettingsIcon />,
  }
];

export default navigation
