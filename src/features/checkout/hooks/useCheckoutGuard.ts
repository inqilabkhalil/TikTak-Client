"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/shared/store/profileStore";
import { useBasketStore } from "@/shared/store";
import { ROUTES } from "@/shared/constants";

export const useCheckoutGuard = () => {
  const router = useRouter();

  const user = useProfileStore((s) => s.user);
  const isInitialized = useProfileStore((s) => s.isInitialized);

  const items = useBasketStore((s) => s.items);
  const isBasketLoading = useBasketStore((s) => s.isLoading);
  const fetchBasket = useBasketStore((s) => s.fetchBasket);


  useEffect(() => {
    if (!isInitialized) return;

    if (!user) {
      router.replace(ROUTES.LOGIN);
      return;
    }

    fetchBasket();
  }, [isInitialized, user, fetchBasket, router]);

  useEffect(() => {
    if (
      isInitialized &&
      user &&
      !isBasketLoading &&
      items.length === 0
    ) {
      router.replace(ROUTES.BASKET ?? "/basket");
    }
  }, [isInitialized, user, isBasketLoading, items.length, router]);

  const isReady =
    isInitialized && !!user && !isBasketLoading && items.length > 0;

  return { user, isReady };
};