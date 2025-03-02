import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

import { footerData } from './constants'
import {
	ApplePaySVG,
	GooglePaySVG,
	MastercardSVG,
	PayPalSVG,
	VisaSVG
} from '@/svgs'

export default function Footer() {
	return (
		<div className="divide-y-2 divide-slate-300 bg-slate-200 px-6 pb-10 pt-32 text-black/60">
			<div className="flex justify-between gap-24 py-5 max-md:flex-col">
				<div className="flex flex-col gap-5">
					<div className="font-integral my-auto text-2xl font-black text-black lg:mb-2 lg:text-[2rem]">
						SHOP.CO
					</div>
					<p className="max-w-64 text-sm font-thin">
						We have clothes that suits your style and which you’re proud to
						wear. From women to men.
					</p>
					<div className="flex gap-5 text-black">
						<div className="rounded-full border border-slate-900 p-1">
							<Twitter size={20} />
						</div>
						<div className="rounded-full border border-slate-900 p-1">
							<Facebook size={20} />
						</div>
						<div className="rounded-full border border-slate-900 p-1">
							<Instagram size={20} />
						</div>
						<div className="rounded-full border border-slate-900 p-1">
							<Github size={20} />
						</div>
					</div>
				</div>
				<div className="flex grow flex-wrap items-start gap-10 max-sm:justify-center">
					{footerData.map((item, idx) => (
						<div
							key={idx}
							className="flex flex-col gap-4"
						>
							<h3 className="font-normal uppercase text-black">
								{item.heading}
							</h3>
							<ul className="text-thin flex min-w-[139px] flex-col gap-3 text-sm capitalize">
								{item.link.map((link, idx) => (
									<li key={idx}>{link}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="">
				<div className="flex items-center justify-between gap-4 py-6 max-lg:flex-col">
					<p>Shop.co © 2000-2023, All Rights Reserved</p>

					<div className="flex flex-wrap justify-center gap-3">
						<VisaSVG />
						<MastercardSVG />
						<PayPalSVG />
						<ApplePaySVG />
						<GooglePaySVG />
					</div>
				</div>
			</div>
		</div>
	)
}
