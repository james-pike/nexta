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
			{/* <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 
				dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Signup for a free website audit.</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a> */}
				<h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" 
					style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'center' }}>
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

		<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Compare Flowbite  to other platforms on the market</h2>
              <p class="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
              <a href="#" class="inline-flex items-center font-medium sm:text-lg text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
                  Learn what makes Flowbite different <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
          <div>
              <a href="#" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 border-primary-600 dark:border-primary-500 hover:bg-gray-50">
                  <div>
                      <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Simplicity and Affordability</span>
                      <span class="text-xl font-semibold text-primary-600 dark:text-primary-500">Flowbite vs Google</span>
                  </div>
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" class="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 border-purple-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-purple-500 hover:bg-gray-50">
                  <div>
                      <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Built for customer support</span>
                      <span class="text-xl font-semibold text-purple-600 dark:text-purple-500">Microsoft vs Apple</span>
                  </div>
                  <svg class="w-6 h-6 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" class="flex justify-between items-center p-4 bg-white rounded-lg border-l-8 border-teal-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-teal-500 hover:bg-gray-50">
                  <div>
                      <span class="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Modern and intuitive ui</span>
                      <span class="text-xl font-semibold text-teal-600 dark:text-teal-500">Zendesk vs Meet</span>
                  </div>
                  <svg class="w-6 h-6 text-teal-600 dark:text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>
  </div>
</section>

		<BrandBanner/>
		
			
</section>

		
	);
}
