import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentComparisons() {
  // This would normally come from your backend
  const recentComparisons = [
    {
      id: 1,
      date: "2 hours ago",
      products: ["Smartphone X", "Smartphone Y", "Smartphone Z"],
      category: "Electronics",
    },
    {
      id: 2,
      date: "Yesterday",
      products: ["Running Shoes A", "Running Shoes B"],
      category: "Footwear",
    },
    {
      id: 3,
      date: "3 days ago",
      products: ["Laptop Pro", "Laptop Air"],
      category: "Computers",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Comparisons</CardTitle>
          <CardDescription>Your previously compared products</CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="gap-1">
          View All <ArrowRight size={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentComparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <div className="font-medium">{comparison.products.join(" vs ")}</div>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <span>{comparison.category}</span>
                  <span>•</span>
                  <span>{comparison.date}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ExternalLink size={18} />
                <span className="sr-only">View comparison</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
