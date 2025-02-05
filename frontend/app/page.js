 "use client"

import react, { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/ui/Navbar"

export default function HomePage() {

  const [step, setStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    { question: "How often can you water your plant?", options: ["Frequently", "Occasionally", "Rarely"] },
    { question: "What kind of sunlight does your space receive?", options: ["Direct sunlight", "Partial shade", "Low light"] },
    { question: "How much time can you commit to plant care?", options: ["A lot", "Moderate", "Minimal"] },
    { question: "How quickly do you want your plant to grow?", options: ["Fast", "Medium", "Slow"] },
  ]

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setStep(0)
    setShowResult(false)
  }
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                Grow Your Own Food in Singapore
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join the urban farming revolution and contribute to Singapore's food security
              </p>
              <div className="flex justify-center space-x-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Find Your Plant Match!
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    {!showResult ? (
                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">{questions[step].question}</h3>
                        <RadioGroup>
                          {questions[step].options.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`option-${index}`} />
                              <Label htmlFor={`option-${index}`}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <Button onClick={handleNext} className="w-full">
                          {step === questions.length - 1 ? "See Result" : "Next"}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Your Plant Match: Kang Kong!</h3>
                        <p>Based on your preferences, we recommend the Kang Kong plant!</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Requires frequent watering</li>
                          <li>Thrives in direct sunlight</li>
                          <li>Needs moderate care</li>
                          <li>Grows relatively fast</li>
                        </ul>
                        <p className="italic">Get ready for some fresh harvests!</p>
                        <Button onClick={resetQuiz} className="w-full">Start Over</Button>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits of Growing Your Own Crops</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Leaf className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                  <p className="text-gray-600">
                    Reduces grocery bills by up to <span className="font-bold text-green-500">30%</span> for a family of four (National Gardening Association)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Sprout className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Healthier Eating</h3>
                  <p className="text-gray-600">
                    Increases vegetable consumption by <span className="font-bold text-green-500">40%</span> in households that grow their own food [American Society for Horticultural Science]
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ShieldCheck className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mental Health</h3>
                  <p className="text-gray-600">Gardening is linked to a <span className="font-bold text-green-500">36%</span> lower risk of dementia (Journal of Alzheimer's Disease)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="challenges" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Singapore's Food Security Challenges</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">Singapore imports over <span className="font-bold text-red-500">90%</span> of its food, making it vulnerable to global supply disruptions [Singapore Food Agency]</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <p className="text-gray-700">Only <span className="font-bold text-red-500">1%</span> of Singapore's land is used for agriculture (Agri-Food and Veterinary Authority of Singapore)</p>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-green-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-800">The "30 by 30" Goal</h3>
                <p className="text-gray-700">Singapore aims to produce 30% of its nutritional needs locally by 2030 (Singapore Food Agency)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="learn" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Learn More About Urban Farming</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/W9tGyNyfDbs" 
                  title="Urban Farming in Singapore" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6k4DBspmqsQ" 
                  title="Rooftop Farming in Singapore" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Growing?</h2>
            <Link href="/community">
              <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SG Community Garden</h3>
              <p className="text-gray-400">Empowering Singaporeans to grow their own food and contribute to national food security.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Forum</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Events</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Volunteer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0  01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SG Community Gardens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}