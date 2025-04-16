"use client"

import type React from "react"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AddProductForm() {
  const [urls, setUrls] = useState<string[]>(["", ""])

  const addUrlField = () => {
    setUrls([...urls, ""])
  }

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls]
    newUrls[index] = value
    setUrls(newUrls)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the submission of product URLs
    console.log(
      "Submitted URLs:",
      urls.filter((url) => url.trim() !== ""),
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compare Products</CardTitle>
        <CardDescription>Add product URLs to compare their features, prices, and specifications</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {urls.map((url, index) => (
            <div key={index} className="flex gap-2">
              <Input
                type="url"
                placeholder={`Product ${index + 1} URL`}
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className="flex-1"
              />
              {index > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const newUrls = [...urls]
                    newUrls.splice(index, 1)
                    setUrls(newUrls)
                  }}
                >
                  &times;
                  <span className="sr-only">Remove</span>
                </Button>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="button" variant="outline" onClick={addUrlField} className="flex items-center gap-2">
              <PlusCircle size={16} />
              Add Another Product
            </Button>

            <Button type="submit" className="sm:ml-auto">
              Compare Products
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
