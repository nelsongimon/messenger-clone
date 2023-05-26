import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import useConversation from "./useConversation";
import { usePathname } from "next/navigation"; 
import { signOut } from "next-auth/react";
import { HiChat } from "react-icons/hi";
import { useMemo } from "react";

export default function useRoutes() {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    {
      label: "Chat",
      href: "/conversatios",
      icon: HiChat,
      active: pathname === "/conversations" || !!conversationId
    },
    {
      label: "Users",
      href: "/users",
      icon: HiUsers,
      active: pathname === "/users" 
    },
    {
      label: "Logout",
      href: "#",
      onClick: () => signOut(),
      icon: HiArrowLeftOnRectangle
    }
  ], [pathname, conversationId]);

  return routes;
}