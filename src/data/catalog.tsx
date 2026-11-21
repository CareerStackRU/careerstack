import type { CatalogItem } from "@/components/CatalogCard";
import {
  CartIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  GlobeIcon,
  NetworkIcon,
  TruckIcon,
} from "@/components/icons";

const iconClass = "h-7 w-7 sm:h-8 sm:w-8";

/** Supply Chain certifications from the founder's hub sketch. */
export const certifications: CatalogItem[] = [
  {
    title: "Supply Chain Fundamentals",
    description: [
      "Learn the core principles of supply chain management,",
      "from planning to delivery.",
    ],
    difficulty: 3,
    icon: <TruckIcon className={iconClass} />,
  },
  {
    title: "Inventory Management",
    description: [
      "Master inventory tracking, control methods,",
      "and optimization strategies.",
    ],
    difficulty: 2,
    icon: <ClipboardCheckIcon className={iconClass} />,
  },
  {
    title: "Logistics & Distribution",
    description: [
      "Understand logistics networks, transportation,",
      "and distribution strategies.",
    ],
    difficulty: 4,
    icon: <GlobeIcon className={iconClass} />,
  },
];

/** Supply Chain projects from the founder's hub sketch — all use real datasets. */
export const projects: CatalogItem[] = [
  {
    title: "Inventory Optimization",
    description: [
      "Analyze inventory data to reduce holding costs",
      "and improve efficiency.",
    ],
    difficulty: 3,
    badge: "Real dataset",
    icon: <ClipboardListIcon className={iconClass} />,
  },
  {
    title: "Procurement Spend Analysis",
    description: [
      "Evaluate procurement spending patterns and",
      "identify cost-saving opportunities.",
    ],
    difficulty: 2,
    badge: "Real dataset",
    icon: <CartIcon className={iconClass} />,
  },
  {
    title: "Logistics Network Design",
    description: [
      "Design an efficient logistics network to minimize",
      "transportation costs and improve service levels.",
    ],
    difficulty: 4,
    badge: "Real dataset",
    icon: <NetworkIcon className={iconClass} />,
  },
];
