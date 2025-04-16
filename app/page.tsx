import { DashboardLayout } from "@/components/dashboard-layout"
import { ProductComparisonPanel } from "@/components/product-comparison-panel"
import { RecentComparisons } from "@/components/recent-comparisons"
import { AddProductForm } from "@/components/add-product-form"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <AddProductForm />
        <ProductComparisonPanel />
        <RecentComparisons />
      </div>
    </DashboardLayout>
  )
}
