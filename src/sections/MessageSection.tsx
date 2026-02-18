import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export const MessageSection = () => {
	useGSAP(() => {
		const firstMsgSplit = SplitText.create('.first-message', {
			type: 'words',
		});
		const secondMsgSplit = SplitText.create('.second-message', {
			type: 'words',
		});
		const paragraphMsgSplit = SplitText.create('.msg-description', {
			type: 'words, line',
			lineClass: 'paragraph-line',
		});

		gsap.to(firstMsgSplit.words, {
			color: '#faedae',
			ease: 'power1.in',
			stagger: 1,
			scrollTrigger: {
				trigger: '.message-content',
				start: 'top center',
				end: '30% center',
				scrub: true,
			},
		});

		gsap.to(secondMsgSplit.words, {
			color: '#faedae',
			ease: 'power1.in',
			stagger: 1,
			scrollTrigger: {
				trigger: '.message-content',
				start: '40% center',
				end: '70% center',
				scrub: true,
			},
		});

		const revealTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.msg-text-scroll',
				start: 'top 60%',
			},
		});
		revealTl.to('.msg-text-scroll', {
			duration: 1.2,
			clipPath: 'polygon(0 0, 100% 1%, 100% 100%, 0 100%)',
			ease: 'circ.inOut',
		});

		const paragraphTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.msg-description',
				start: 'top center',
				markers: true,
			},
		});

		paragraphTl.from(paragraphMsgSplit.words, {
			yPercent: 300,
			rotate: 5,
			ease: 'power1.inOut',
			duration: 1,
			stagger: 0.001,
		});
	});

	return (
		<section className='message-content'>
			<div className='container mx-auto flex-center py-28 relative'>
				<div className='w-full h-full'>
					<div className='msg-wrapper uppercase'>
						<h1 className='first-message'>
							Enciende tu espíritu intrépido del pasado y
						</h1>

						<div
							style={{
								clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
							}}
							className='msg-text-scroll'
						>
							<div className='bg-light-brown md:pb-5 pb-3 px-5'>
								<h2 className='text-red-brown'>Recarga</h2>
							</div>
						</div>

						<h1 className='second-message'>
							Tu futuro con cada sorbo de pura proteína.
						</h1>
					</div>

					<div className='flex-center md:mt-20 mt-10'>
						<div className='max-w-md px-10 flex-center overflow-hidden'>
							<p className='msg-description'>
								Impulsa tu espíritu rebelde y nutre la aventura de vivir con
								SPYLT, a solo un trago de recuerdos épicos y diversión sin
								límites.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
