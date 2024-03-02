//Lect 32

// Error Boundary -->
// A class component that implements either on eor both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
//
// The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

import React from 'react';

function Hero({heroName}){
    if (heroName=== 'Joker'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
export default Hero
