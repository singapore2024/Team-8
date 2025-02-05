"use client"; // Mark this file as a client component

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MapPin } from "lucide-react";
import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

const Community = () => {
    
    return (
        <>
        <Navbar />
        <div className='bg-green-50 p-4 md:p-8 space-y-8'>
            
            <header className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800">Singapore Community Gardens Map</h1>
                <p className="text-lg text-green-700">Discover green spaces where you can nurture your gardening passion</p>
            </header>
            <div id="mapContainer" className='w-full h-[600px] border-2 border-[#ddd]'>
                <iframe
                    src='https://www.google.com/maps/d/u/0/embed?mid=1IyjD6zhWArZZhDMZnE-J-lJHtYr8LEg&ll=1.3549293641578666%2C103.8118335&z=11'
                    className='w-full h-full border-0'
                    allowFullScreen
                >

                </iframe>
            </div>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-800">About Community Gardening in Singapore</h2>
                <p className="text-gray-700">
                    Singapore, known as the "Garden City," has a thriving community gardening scene. These gardens provide
                    opportunities for residents to grow their own produce, connect with nature, and build stronger
                    communities. From rooftop gardens to neighborhood allotments, there's a diverse range of spaces
                    where you can exercise your green thumb.
                </p>
            </section>
            <section className="grid md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-green-600" />
                            Types of Gardens
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Community Gardens in Public Housing Estates</li>
                            <li>Allotment Gardens</li>
                            <li>Therapeutic Gardens</li>
                            <li>Edible Gardens</li>
                            <li>Rooftop Gardens</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MapPin className="mr-2 h-5 w-5 text-green-600" />
                            Benefits
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Foster community bonding</li>
                            <li>Promote sustainable living</li>
                            <li>Enhance urban biodiversity</li>
                            <li>Provide educational opportunities</li>
                            <li>Improve mental and physical well-being</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <div className="text-center">
            <Link href="/form" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Find a Garden Near You
                </Button>
            </Link>
            </div>

            <header className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800">Singapore Alloment Garden map</h1>
                <p className="text-lg text-green-700">Alloment gardens are small plots of gardens for your own individual gardening</p>
            </header>
            <div id="mapContainer" className='w-full h-[600px] border-2 border-[#ddd]'>
                <iframe
                    src='https://www.google.com/maps/d/embed?mid=1apkeSb5QHzODZOp7DdtNxFTa61GSA9U&femb=1&ll=1.3698787913810788%2C103.8250301&z=12'
                    className='w-full h-full border-0'
                    allowFullScreen
                >

                </iframe>
            </div>
            <div className='flex gap-3'>
            <Link href="https://go.gov.sg/nparks-ag-plot-how-to-apply-axs" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                    How to apply
                </Button>
            </Link>

            <Link href="https://go.gov.sg/nparks-ag-plot-how-to-pay-axs" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                    How to pay
                </Button>
            </Link>
            </div>    



            <footer className="text-center text-sm text-gray-500 mt-8">
                <p>Data provided by National Parks Board (NParks) and various community initiatives.</p>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </footer>
          
            </div>
        </>
    );
};

export default Community;
