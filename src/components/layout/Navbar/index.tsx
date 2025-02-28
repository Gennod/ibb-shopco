'use client'

import { Input } from '@/components/ui/input'
import {
	AlignLeft,
	CircleUserRound,
	SearchIcon,
	ShoppingCart,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from './components/Navigation'

import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
	const [openNav, setOpenNav] = useState(false)
	const [showMobileSearch, setShowMobileSearch] = useState(false)

	return (
		<header className='text-black fixed z-50 w-full bg-white border-b border-black/10'>
			<nav className='py-6 px-6 flex justify-between items-center gap-2'>
				<div className='flex justify-between gap-4'>
					{/* MOBILE TOGGLE */}

					<button
						className='active:scale-95 lg:hidden'
						onClick={() => setOpenNav(prev => !prev)}
					>
						<AlignLeft className='size-8' />
					</button>

					{/* LOGO */}

					<Link
						className='my-auto font-integral text-2xl lg:mb-2 lg:text-[2rem] font-black'
						href='/'
					>
						SHOP.CO
					</Link>

					{/* DESKTOP NAVIGATION */}

					<Navigation className='max-lg:hidden' />
				</div>
				<div className='w-full max-lg:hidden'>
					<Input />
				</div>

				<div className='flex items-center justify-center gap-4 *:size-6'>
					<button
						onClick={prev => setShowMobileSearch(!prev)}
						className='lg:hidden'
					>
						<SearchIcon className='size-6' />
					</button>
					<Link href='/cart' className='relative'>
						<ShoppingCart />
						<span className='absolute -right-2 -top-2 rounded-full bg-zinc-100 px-1 text-sm font-medium'>
							0
						</span>
					</Link>
					<Link href={'/profile'}>
						<CircleUserRound />
					</Link>
				</div>
			</nav>
			<AnimatePresence>
				{openNav && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='absolute top-full min-h-[calc(100dvh-4rem)] w-full lg:!hidden -z-20'
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setOpenNav(false)}
							className='full-width absolute inset-0 size-full bg-shade-100/50 backdrop-blur-sm -z-10'
						/>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className='h-fit w-3/4 mx-auto rounded-2xl bg-black px-8 py-10 text-white'
						>
							<Navigation
								className='z-10 h-fit rounded-2xl bg-black px-8 py-10 text-black'
								onClose={() => setOpenNav(false)}
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
