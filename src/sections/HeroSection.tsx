export const HeroSection = () => {
	return (
		<section className='bg-main-bg'>
			<div className='hero-container'>
				<img
					src='/images/hero-img.png'
					alt='hero-img'
					className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto md:scale-150 scale-100'
				/>
				<div className='hero-content'>
					<div className='overflow-hidden'>
						<h1 className='hero-title'>Malditamente Delicioso</h1>
					</div>
				</div>
			</div>
		</section>
	);
};
