import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export const HeroSection = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('.hero-title', {
			type: 'chars',
			autoSplit: true,
		});

		const tl = gsap.timeline({
			delay: 1,
		});

		tl.to('.hero-content', {
			opacity: 1,
			y: 0,
			ease: 'power1.inOut',
		})
			.to(
				'.hero-text-scroll',
				{
					duration: 1,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					ease: 'circ.out',
				},
				'-=0.5'
			)
			.from(
				titleSplit.chars,
				{
					yPercent: 200,
					stagger: 0.03,
					ease: 'power2.out',
				},
				'-=0.5'
			);

		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.hero-container',
				start: '1% top',
				end: 'bottom top',
				scrub: true,
			},
		});

		heroTl.to('.hero-container', {
			rotate: 7,
			scale: 0.9,
			yPercent: 30,
			ease: 'power1.inOut',
		});
	});

	return (
		<section className='bg-main-bg'>
			<div className='hero-container'>
				<img
					src='/images/static-img.png'
					alt='static-img'
					className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto md:scale-150 scale-100'
				/>
				<div className='hero-content opacity-0'>
					<div className='overflow-hidden'>
						<h1 className='hero-title'>Malditamente Delicioso</h1>
					</div>
					{/* Técnica de reveal con GSAP: clipPath inicial colapsado (50% 0, 50% 100%, 50% 100%)
				    que se anima hacia polygon(0% 0, 100% 0, 100% 100%) para revelar el contenido */}
					<div
						style={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
						className='hero-text-scroll'
					>
						<div className='hero-subtitle'>
							<h1>Proteína + cafeína</h1>
						</div>
					</div>

					<h2>
						Vive intensamente con SPYLT: haz pedazos el aburrimiento y reconecta
						con tu niño interior en cada trago cremoso y delicioso.
					</h2>

					<button className='hero-button cursor-pointer hover:scale-105 transition-all'>
						BEBE UN SPYLT
					</button>
				</div>
			</div>
		</section>
	);
};
