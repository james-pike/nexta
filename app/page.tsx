'use client'

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BrandBanner from "@/components/brand-banner";
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {


	const handleType = (count: number) => {
		// access word count number
		console.log(count)}
	  
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`)
	  }

	const words = [
		{
		  text: "Build",
		},
		{
		  text: "awesome",
		},
		{
		  text: "apps",
		},
		{
		  text: "with",
		},
		{
		  text: "Aceternity.",
		  className: "text-blue-500 dark:text-blue-500",
		},
	  ];

	return (
		
		<section>
		<div className="h-[20rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


			<div className="text-center">
				<h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', textAlign: 'center' }}>
					Custom Solutions in{' '}
					<br></br>
					
					<span className="text-primary w-full" style={{ fontWeight: 'bold' }}>
						{/* Style will be inherited from the parent element */}
						<Typewriter
							words={['Web Design', 'Application Development', 'Digital Marketing', 'Branding']}
							loop={2}
							cursor
							cursorStyle='_'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
							onLoopDone={handleDone}
							onType={handleType}
						/>
					</span>
				</h1>


			</div>


		</div>
<BrandBanner/>
</section>

		
	);
}
