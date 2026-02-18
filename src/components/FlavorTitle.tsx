import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export const FlavorTitle = () => {
	useGSAP(() => {
		const firstTextSplit = SplitText.create('.first-text-split h1', {
			type: 'chars',
		});

		const secondTextSplit = SplitText.create('.second-text-split h1', {
			type: 'chars',
		});

		gsap.from(firstTextSplit.chars, {
			yPercent: 200,
			stagger: 0.02,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.flavor-section',
				start: 'top 40%',
			},
		});

		gsap.to('.flavor-text-scroll', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			duration: 1,
			ease: 'circ.inOut',
			scrollTrigger: {
				trigger: '.flavor-section',
				start: 'top 40%',
				markers: true,
			},
		});
	});

	return (
		<div className='general-title col-center 2xl:gap-32 xl:gap-24 gap-16'>
			<div className='overflow-hidden 2xl:py-0 py-3 first-text-split'>
				<h1>Tenemos 6</h1>
			</div>

			<div
				style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
				className='flavor-text-scroll'
			>
				<div className='bg-mid-brown'>
					<h2 className='text-milk pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3'>
						Malditamente
					</h2>
				</div>
			</div>

			<div className='overflow-hidden 2xl:py-0 py-3 second-text-split'>
				<h1>deliciosos sabores</h1>
			</div>
		</div>
	);
};
