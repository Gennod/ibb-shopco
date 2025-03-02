import { Mail } from 'lucide-react'

import ButtonLink from '@/components/ui-build/ButtonLink'
import InputField from '@/components/ui-build/InputField'

const CTASection = () => {
	return (
		<section className="pb-10 pl-16 pr-16 pt-10 text-white">
			<div className="flex justify-between rounded-[1.5rem] bg-black p-7 max-lg:flex-col">
				<h2 className="font-integral -mt-0.5 max-w-[35rem] text-[2rem] font-black leading-[2.1875rem] text-white max-lg:mb-5 lg:text-[2.5rem] lg:leading-[2.8125rem]">
					STAY UPTO DATE ABOUT <br />
					OUR LATEST OFFERS
				</h2>
				<div className="flex w-full flex-col justify-center gap-3 text-white max-lg:mx-auto lg:max-w-[22rem]">
					<InputField
						startIcon={<Mail />}
						placeholder="Enter your email address"
						iconProps={{
							className: 'stroke-black/40'
						}}
					/>
					<ButtonLink className="hover:bg-shade-200 w-full bg-neutral-100 py-6 text-black">
						Subscribe to Newsletter
					</ButtonLink>
				</div>
			</div>
		</section>
	)
}
export default CTASection
