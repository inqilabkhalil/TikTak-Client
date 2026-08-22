import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { productService } from "@/shared/services/productService";
import { Product } from "@/shared/types/product.types";
import { useClickOutside } from "@/shared/hooks";

export const useHeaderSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const searchFromUrl = searchParams.get("search") || "";
  const isModalActiveInUrl = searchParams.get("modal") === "open";

  const [search, setSearch] = useState(searchFromUrl);
  const [isDropdownOpen, setIsDropdownOpen] = useState(isModalActiveInUrl);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const hasFetchedRef = useRef(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const categoryMatch = pathname.match(/\/category\/([^/]+)/);
  const currentCategorySlug = categoryMatch ? categoryMatch[1] : null;

  const updateQueryParams = (searchValue: string, openModal: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchValue.trim()) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }

    if (openModal) {
      params.set("modal", "open");
    } else {
      params.delete("modal");
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const closeSearch = () => {
    setIsDropdownOpen(false);
    updateQueryParams(search, false);
  };

  useClickOutside(searchBoxRef, closeSearch);

  useEffect(() => {
    setSearch(searchFromUrl);
    setIsDropdownOpen(isModalActiveInUrl);
  }, [searchFromUrl, isModalActiveInUrl]);

  useEffect(() => {
    if (!isDropdownOpen || hasFetchedRef.current) return;

    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await productService.getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Məhsullar yüklənərkən xəta baş verdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [isDropdownOpen]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = currentCategorySlug
      ? String(product.categoryId) === String(currentCategorySlug)
      : true;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const shouldOpen = Boolean(value.trim());
    setIsDropdownOpen(shouldOpen);
    updateQueryParams(value, shouldOpen);
  };

  const handleInputFocus = () => {
    if (search.trim()) {
      setIsDropdownOpen(true);
      updateQueryParams(search, true);
    }
  };

  const handleResultClick = (id: number) => {
    setIsDropdownOpen(false);
    setSearch("");
    router.push(`/product/${id}`);
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key != 'Enter') return;
    e.preventDefault();

    if (filteredProducts.length > 0) {
        handleResultClick(filteredProducts[0].id);
    }
  };

  const isSearchModalOpen = isDropdownOpen && Boolean(search.trim());

  return {
    search,
    searchBoxRef,
    loading,
    filteredProducts,
    isSearchModalOpen,
    closeSearch,
    handleSearchChange,
    handleInputFocus,
    handleResultClick,
    handleSearchKeyDown,
  };
};
