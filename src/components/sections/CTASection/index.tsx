import ButtonLink from '@/components/ui-build/ButtonLink'
import InputField from '@/components/ui-build/InputField'
import { Mail } from 'lucide-react'

const CTASection = () => {
	return (
		<section className='pt-10 pb-10 pl-16 pr-16 text-white'>
			<div className='bg-black rounded-[1.5rem] p-7 flex justify-between'>
				<h2 className='-mt-0.5 max-w-[35rem] font-integral font-black text-[2rem] leading-[2.1875rem] text-white lg:text-[2.5rem] lg:leading-[2.8125rem]'>
					STAY UPTO DATE ABOUT <br />
					OUR LATEST OFFERS
				</h2>
				<div className='flex w-full flex-col justify-center gap-3 text-white max-lg:mx-auto lg:max-w-[22rem]'>
					<InputField
						startIcon={<Mail />}
						placeholder='Enter your email address'
						iconProps={{
							className: 'stroke-black/40',
						}}
					/>
					<ButtonLink className='w-full bg-neutral-100 py-6 text-black hover:bg-shade-200'>
						Subscribe to Newsletter
					</ButtonLink>
				</div>
			</div>
		</section>
	)
}
export default CTASection
