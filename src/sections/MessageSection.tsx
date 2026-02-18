export const MessageSection = () => {
	return (
		<section className='message-content'>
			<div className='container mx-auto flex-center py-28 relative'>
				<div className='w-full h-full'>
					<div className='msg-wrapper uppercase'>
						<h1 className='first-message'>
							Enciende tu espíritu intrépido del pasado y
						</h1>

						<div className='msg-text-scroll'>
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
							<p>
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
