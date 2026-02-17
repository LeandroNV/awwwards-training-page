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

					<div className='hero-button'>
						<p>CHUG A SPYLT</p>
					</div>
				</div>
			</div>
		</section>
	);
};
