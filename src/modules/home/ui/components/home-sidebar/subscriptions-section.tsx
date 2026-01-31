"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";

import { Skeleton } from "@/components/ui/skeleton";
import { ListIcon } from "lucide-react";
import { UserAvatar } from "@/components/usre-avatar";

export const LoadingSkeleton = () => {
  return(
  <>
    {[1, 2, 3, 4].map((i) => (
      <SidebarMenuSubItem key={i}>
        <SidebarMenuButton
        disabled
        >
          <Skeleton className="size-6 rounded-full shrink-0"/>
          <Skeleton className="h-4 w-full"/>
        </SidebarMenuButton>
      </SidebarMenuSubItem>
    ))} 
  </>
  )
}

export const SubscriptionSection = () => {
  const {data, isLoading } = trpc.subscriptions.getMany.useInfiniteQuery({
    limit: DEFAULT_LIMIT
  },
  {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  }
)

  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Subscriptions</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {isLoading && <LoadingSkeleton />}
          {!isLoading && data?.pages.flatMap((page) => page.items).map((subscription) => (
            <SidebarMenuItem key={`${subscription.creatorId}-${subscription.viewerId}`}>
              <SidebarMenuButton
                tooltip={subscription.user.name}
                asChild
                isActive={pathname === `/users/${subscription.user.id}`}
              >
                <Link href={`/users/${subscription.user.id}`} className="flex items-center gap-4">
                  <UserAvatar
                  size="xs"
                  imageUrl={subscription.user.imageUrl}
                  name={subscription.user.name}
                  />
                  <span className="text-sm">{subscription.user.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          {!isLoading && (
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/subscriptions'}
              >
                  <Link
                  href="/subscriptions"
                  className="flex items-center gap-4"
                  >
                    <ListIcon className="size-4"/>
                    <span className="text-sm">All Subscriptions</span>
                  </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
