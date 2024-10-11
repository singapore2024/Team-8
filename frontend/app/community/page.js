"use client"; // Mark this file as a client component

import React, { useEffect } from 'react';

const Community = () => {
    // Function to create the map container
    const createMapContainer = () => {
        // Create a div for the map container
        const mapDiv = document.createElement('div');
        mapDiv.id = 'mapContainer'; // ID for CSS targeting or future reference
        mapDiv.style.width = '100%'; // Full width
        mapDiv.style.height = '600px'; // Set height for the container
        mapDiv.style.border = '2px solid #ddd'; // Optional: Border for styling
        mapDiv.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)'; // Optional: Shadow for styling

        // Create the iframe element to embed the Google My Maps
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.google.com/maps/d/u/0/embed?mid=1IyjD6zhWArZZhDMZnE-J-lJHtYr8LEg&ll=1.3549293641578666%2C103.8118335&z=11'; // Your specific map link
        iframe.width = '100%'; // Full width
        iframe.height = '100%'; // Full height to fill container
        iframe.frameBorder = '0'; // No border
        iframe.style.border = '0'; // No border for the iframe
        iframe.allowFullscreen = true; // Allow fullscreen mode

        // Append the iframe to the map container
        mapDiv.appendChild(iframe);
        // Append the map container to the body
        document.body.appendChild(mapDiv);
    };

    // Use useEffect to run the function on component mount
    useEffect(() => {
        createMapContainer(); // Create the map container and embed the Google My Map
    }, []);

    return (
        <div>
            <h1>Community Map</h1>
            {/* The map container will be appended here */}
        </div>
    );
};

export default Community;
