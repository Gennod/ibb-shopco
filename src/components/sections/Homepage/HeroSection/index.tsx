import ButtonLink from '@/components/ui-build/ButtonLink'

const data: {
	quantity: string
	description: string
}[] = [
	{
		quantity: '200+',
		description: 'International Brands',
	},
	{
		quantity: '2000+',
		description: 'High-Quality Products',
	},
	{
		quantity: '30000+',
		description: 'Happy Customers',
	},
]

export default function HeroSection() {
	return (
		<section className='flex justify-between items-center full-width pb-28 pt-12 pl-5 pr-5 lg:pt-20 bg-slate-200'>
			<div>
				<h1 className='font-integral text-4xl leading-[2.125rem] text-black max-md:max-w-[22.5rem] md:text-5xl lg:text-[4rem] lg:leading-[4rem] uppercase font-black'>
					Find stuff
					<br />
					that you need
				</h1>
				<p className='text-sm text-black/60 max-w-[32.5rem] md:text-base mt-10 mb-5'>
					Browse through our diverse range of meticulously crafted products,
					thoughtfully designed to celebrate your individuality and cater to
					your unique taste and lifestyle.
				</p>
				<ButtonLink link='/shop' className='w-full px-14 py-4 md:w-fit'>
					Shop Now
				</ButtonLink>
				<ul className='mt-10 flex justify-between'>
					{data.map((item, idx) => (
						<li key={idx}>
							<p className='text-2xl font-bold md:text-[2rem] lg:text-[2.5rem]'>
								{item.quantity}
							</p>
							<p className='text-xs text-black/60 md:text-sm lg:text-base'>
								{item.description}
							</p>
						</li>
					))}
				</ul>
			</div>
			<figure className='aspect-square w-96 rounded-full bg-neutral-500'></figure>
		</section>
	)
}
