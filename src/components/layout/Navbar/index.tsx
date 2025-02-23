'use client'

import { Input } from '@/components/ui/input'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { CircleUserRound, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='py-6 px-6 flex justify-between items-center gap-2'>
			<div className='flex justify-between gap-4'>
				<Link className='text-4xl font-black' href='/'>
					SHOP.CO
				</Link>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href='/shop' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									shop
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>categories</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid md:grid-cols-2 max-h-[calc(100dvh - 20rem)] min-w-[320px] gap-8 md:min-w-[500px] lg:min-w-[600px] text-sm font-thin'>
									<li>
										<h2>Men's fashion</h2>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Delectus dolor omnis dolorum ullam velit molestiae
										</p>
										<div>Links</div>
									</li>
									<li>
										<h2>Men's fashion</h2>
										<p>Description</p>
										<div>Links</div>
									</li>
									<li>
										<h2>Men's fashion</h2>
										<p>Description</p>
										<div>Links</div>
									</li>
									<li>
										<h2>Men's fashion</h2>
										<p>Description</p>
										<div>Links</div>
									</li>
									<li>
										<h2>Men's fashion</h2>
										<p>Description</p>
										<div>Links</div>
									</li>
									<li>
										<h2>Men's fashion</h2>
										<p>Description</p>
										<div>Links</div>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className='w-full'>
				<Input />
			</div>
			<div className='flex gap-4'>
				<ShoppingCart className='cursor-pointer' />
				<CircleUserRound className='cursor-pointer' />
			</div>
		</nav>
	)
}
