import gsap from 'gsap';
import { NavBar } from './components/NavBar';
import { HeroSection } from './sections/HeroSection';
import { ScrollTrigger } from 'gsap/all';
import { MessageSection } from './sections/MessageSection';
import { FlavorSection } from './sections/FlavorSection';
gsap.registerPlugin(ScrollTrigger);

export const App = () => {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<MessageSection />
			<FlavorSection />
			<div className='h-dvh border-2 border-red-500'></div>
		</main>
	);
};
