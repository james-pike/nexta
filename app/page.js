'use client'

import BrandBanner from "@/components/brand-banner";
import { Typewriter } from 'react-simple-typewriter'
import { Button } from "@nextui-org/button";
import React, { useEffect } from 'react';



export default function Home() {

	
	useEffect(() => {
		// Load Crisp chat script
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = "283b7c7f-4f69-4725-ba15-f11822e24856";
		const d = document;
		const s = d.createElement("script");
		s.src = "https://client.crisp.chat/l.js";
		s.async = 1;
		d.getElementsByTagName("head")[0].appendChild(s);
	
		// Clean up the script when component unmounts
		return () => {
		  d.getElementsByTagName("head")[0].removeChild(s);
		};
	  }, []);

	const handleType = (count) => {
		// access word count number
		console.log(count)}
	  
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`)
	  }


	return (
		
		<section>
		<div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


			<div className="text-center">
			<a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 
				dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Signup for a free website audit.</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
				<h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" 
					style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'center' }}>
					Custom Solutions in
					<br></br>
					
					
					<span className="text-primary w-full" style={{ fontWeight: 'bold' }}>
						{/* Style will be inherited from the parent element */}
						<Typewriter
							words={['Web Design', 'Digital Marketing', 'App Development', 'Branding', 'SEO + Analytics', 'Social Media', 'E-commerce', 'Content Creation', 'Graphic Design', 'Product Photography']}
							loop={2}
							cursor
							cursorStyle='|'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							onLoopDone={handleDone}
							onType={handleType}
						/>
					</span>
				</h1>
				<p className="mb-8 text-lg px-4 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<br></br>
<p></p>
		<div className="flex flex-wrap gap-4 items-center justify-center">
			
     
      <Button size="lg"color="primary">
        Get Started
      </Button>  
	  <Button size ="lg" color="default">
        Learn More
      </Button>

	  

    </div>

			</div>



		</div>

		<BrandBanner/>
		
			
</section>

		
	);
}
