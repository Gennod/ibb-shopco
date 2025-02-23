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
import { cn } from '@/lib/utils'
import { CircleUserRound, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const components: {
	title: string
	description: string
	categories?: { name: string; href: string }[]
}[] = [
	{
		title: "Men's Fashion",
		description:
			'Discover trendy shirts, shoes, and watches for the modern man.',
		categories: [
			{ name: 'Shirts', href: '/categories/mens-shirts' },
			{ name: 'Shoes', href: '/categories/mens-shoes' },
			{ name: 'Watches', href: '/categories/mens-watches' },
		],
	},
	{
		title: "Women's Fashion",
		description:
			'Explore elegant dresses, bags, jewelry, and accessories for women.',
		categories: [
			{ name: 'Dresses', href: '/categories/womens-dresses' },
			{ name: 'Bags', href: '/categories/womens-bags' },
			{ name: 'Jewelry', href: '/categories/womens-jewellery' },
			{ name: 'Shoes', href: '/categories/womens-shoes' },
			{ name: 'Watches', href: '/categories/womens-watches' },
			{ name: 'Tops', href: '/categories/tops' },
		],
	},
	{
		title: 'Electronics',
		description:
			'Browse latest smartphones, laptops, tablets, and accessories.',
		categories: [
			{ name: 'Smartphones', href: '/categories/smartphones' },
			{ name: 'Laptops', href: '/categories/laptops' },
			{ name: 'Tablets', href: '/categories/tablets' },
			{ name: 'Mobile Accessories', href: '/categories/mobile-accessories' },
		],
	},
	{
		title: 'Beauty & Care',
		description: 'Find skincare products, fragrances, and beauty essentials.',
		categories: [
			{ name: 'Skin Care', href: '/categories/skin-care' },
			{ name: 'Fragrances', href: '/categories/fragrances' },
		],
	},
	{
		title: 'Home & Living',
		description:
			'Shop furniture, kitchen accessories, and home decoration items.',
		categories: [
			{ name: 'Furniture', href: '/categories/furniture' },
			{ name: 'Kitchen Accessories', href: '/categories/kitchen-accessories' },
			{ name: 'Home Decoration', href: '/categories/home-decoration' },
			{ name: 'Groceries', href: '/categories/groceries' },
		],
	},
	{
		title: 'Sports & Automotive',
		description: 'Explore sports gear, vehicles, and automotive accessories.',
		categories: [
			{ name: 'Sports Accessories', href: '/categories/sports-accessories' },
			{ name: 'Sunglasses', href: '/categories/sunglasses' },
			{ name: 'Motorcycle', href: '/categories/motorcycle' },
			{ name: 'Vehicle', href: '/categories/vehicle' },
		],
	},
]

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
								<ul className='grid md:grid-cols-2 max-h-[calc(100dvh - 20rem)] min-w-[320px] gap-8 md:min-w-[500px] lg:min-w-[600px] text-sm font-thin p-5'>
									{components.map(item => (
										<NavigationItem
											key={item.title}
											title={item.title}
											categories={item.categories}
										>
											{item.description}
										</NavigationItem>
									))}
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

const NavigationItem = React.forwardRef<
	React.ComponentRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & {
		categories?: { name: string; href: string }[]
	}
>(({ className, title, children, categories, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<span ref={ref} className={cn('...', className)} {...props}>
					<div className='text-sm font-medium leading-none'>{title}</div>

					<p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
						{children}
					</p>

					{categories && (
						<div className='mt-2 flex flex-wrap gap-x-2'>
							{categories.map(category => (
								<Link
									key={category.href}
									href={category.href}
									className='text-muted-foreground hover:text-primary border-r border-neutral-800 pr-2 text-sm uppercase italic last:border-none hover:underline'
								>
									{category.name}
								</Link>
							))}
						</div>
					)}
				</span>
			</NavigationMenuLink>
		</li>
	)
})
NavigationItem.displayName = 'NavigationItem'
