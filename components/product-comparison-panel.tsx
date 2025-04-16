import { Check, X } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProductComparisonPanel() {
  // This would normally come from your backend or state management
  const products = [
    {
      id: 1,
      name: "Premium Headphones X1",
      price: 199.99,
      rating: 4.7,
      image: "/placeholder.svg?height=150&width=150",
      specs: {
        Wireless: true,
        "Battery Life": "30 hours",
        "Noise Cancellation": true,
        "Water Resistant": false,
        Warranty: "2 years",
      },
    },
    {
      id: 2,
      name: "Ultra Sound Headphones Pro",
      price: 249.99,
      rating: 4.5,
      image: "/placeholder.svg?height=150&width=150",
      specs: {
        Wireless: true,
        "Battery Life": "25 hours",
        "Noise Cancellation": true,
        "Water Resistant": true,
        Warranty: "1 year",
      },
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Comparison</CardTitle>
        <CardDescription>Compare features and specifications side by side</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">${product.price}</Badge>
                    <Badge variant="outline">★ {product.rating}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specs">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Specification</th>
                    {products.map((product) => (
                      <th key={product.id} className="text-center py-3 px-4">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(products[0].specs).map((spec) => (
                    <tr key={spec} className="border-b">
                      <td className="py-3 px-4 font-medium">{spec}</td>
                      {products.map((product) => (
                        <td key={product.id} className="text-center py-3 px-4">
                          {typeof product.specs[spec as keyof typeof product.specs] === "boolean" ? (
                            product.specs[spec as keyof typeof product.specs] ? (
                              <Check className="mx-auto text-green-500" size={18} />
                            ) : (
                              <X className="mx-auto text-red-500" size={18} />
                            )
                          ) : (
                            product.specs[spec as keyof typeof product.specs]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold mb-4">${product.price}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Base Price</span>
                      <span>${product.price - 20}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tax</span>
                      <span>${(product.price * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span>$20.00</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${(product.price + product.price * 0.1 + 20).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
