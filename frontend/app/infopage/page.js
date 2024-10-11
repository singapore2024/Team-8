'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sun, Droplet, Scissors } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/ui/Navbar"

// Update plants array to include URLs
const plants = [
  { 
    id: 1, 
    name: "Chinese Flowering Cabbage (Cai Xin)", 
    image: "https://www.nparks.gov.sg/-/media/ffw/protected/flora/5/9/5950/brassica-rapa-(caixin)_vicky-lim-(2).jpg", 
    sunlight: 2, 
    maintenance: 1, 
    water: 1,
    description: "Low-maintenance indoor plant that can tolerate low light and infrequent watering.",
    url: "https://www.nparks.gov.sg/-/media/gwe-2021/2021-gwe-cai-xin.pdf" // Add your specific URL here
  },
  { 
    id: 2, 
    name: "Kang Kong", 
    image: "https://sunnybankfruit.com.au/wp-content/uploads/2021/09/IMG_2877-kang-kong.jpg", 
    sunlight: 3, 
    maintenance: 2, 
    water: 2,
    description: "Popular houseplant known for its large, glossy, perforated leaves.",
    url: "https://www.nparks.gov.sg/-/media/gwe-2021/2021-gwe-kangkong.pdf" // Add your specific URL here
  },
  { 
    id: 3, 
    name: "Nai Bai Cai", 
    image: "https://www.nparks.gov.sg/-/media/ffw/protected/flora/6/5/6526/brassica-rapa-pak-choi-group-nai-bai-cai-jennie-tang_4.jpg", 
    sunlight: 5, 
    maintenance: 3, 
    water: 2,
    description: "Fragrant herb that requires full sun and well-draining soil.",
    url: "https://www.nparks.gov.sg/-/media/gwe-2021/2021-gwe-nai-bai-cai.pdf" // Add your specific URL here
  },
  { 
    id: 4, 
    name: "Bayam Plant", 
    image: "https://www.thelivingcentre.sg/store/wp-content/uploads/2021/05/RedBayam.jpg", 
    sunlight: 4, 
    maintenance: 1, 
    water: 1,
    description: "Succulent plant with medicinal properties, requires bright light and minimal watering.",
    url: "https://www.nparks.gov.sg/-/media/gwe-2021/2021-gwe-bayam-green-,-a-,-red.pdf" // Add your specific URL here
  },
  { 
    id: 5, 
    name: "Huang Jing Bai Cai (Pak Choy)", 
    image: "https://www.nparks.gov.sg/-/media/ffw/protected/flora/8/5/8540/brassica_rapa_huang_jing_bai_cai_vicky_lim_yen_ngoh_5.jpg", 
    sunlight: 3, 
    maintenance: 4, 
    water: 4,
    description: "Lush, feathery fern that thrives in humid environments with indirect light.",
    url: "https://www.nparks.gov.sg/-/media/gwe-2021/2021-gwe-huang-jing-bai-cai.pdf" // Add your specific URL here
  },
]

const filterLabels = {
  sunlight: ['Any', 'Very Low', 'Low', 'Medium', 'High', 'Very High'],
  maintenance: ['Any', 'Very Low', 'Low', 'Medium', 'High', 'Very High'],
  water: ['Any', 'Very Low', 'Low', 'Medium', 'High', 'Very High'],
}

export default function PlantInfoPage() {
  const [filters, setFilters] = useState({
    sunlight: 0,
    maintenance: 0,
    water: 0
  })

  const filteredPlants = plants.filter(plant => 
    (filters.sunlight === 0 || plant.sunlight === filters.sunlight) &&
    (filters.maintenance === 0 || plant.maintenance === filters.maintenance) &&
    (filters.water === 0 || plant.water === filters.water)
  )

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: parseInt(value) }))
  }

  const FilterDropdown = ({ type, icon }) => (
    <div className="flex items-center space-x-2">
      {icon}
      <Select onValueChange={(value) => handleFilterChange(type, value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${type}`} />
        </SelectTrigger>
        <SelectContent>
          {filterLabels[type].map((label, index) => (
            <SelectItem key={index} value={index.toString()}>{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Plant Information</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FilterDropdown 
              type="sunlight" 
              icon={<Sun className="h-5 w-5 text-yellow-500" />} 
            />
            <FilterDropdown 
              type="maintenance" 
              icon={<Scissors className="h-5 w-5 text-green-500" />} 
            />
            <FilterDropdown 
              type="water" 
              icon={<Droplet className="h-5 w-5 text-blue-500" />} 
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <Card key={plant.id}>
              <CardHeader>
                <CardTitle>
                  <Link href={plant.url} target="_blank" className="text-blue-500 hover:underline">
                    {plant.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={plant.url} target="_blank">
                  <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                </Link>
                <p className="text-sm text-gray-600 mb-4">{plant.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center">
                    <Sun className="h-3 w-3 text-yellow-500 mr-1" />
                    {filterLabels.sunlight[plant.sunlight]}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <Scissors className="h-3 w-3 text-green-500 mr-1" />
                    {filterLabels.maintenance[plant.maintenance]}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <Droplet className="h-3 w-3 text-blue-500 mr-1" />
                    {filterLabels.water[plant.water]}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">&copy; 2024 SG Community Gardens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
