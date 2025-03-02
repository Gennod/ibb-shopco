'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	AlignLeft,
	CircleUserRound,
	SearchIcon,
	ShoppingCart
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Input } from '@/components/ui/input'

import { Navigation } from './components/Navigation'

export default function Navbar() {
	const [openNav, setOpenNav] = useState(false)
	const [showMobileSearch, setShowMobileSearch] = useState(false)

	return (
		<header className="fixed z-50 w-full border-b border-black/10 bg-white text-black">
			<nav className="flex items-center justify-between gap-2 px-6 py-6">
				<div className="flex justify-between gap-4">
					{/* MOBILE TOGGLE */}

					<button
						className="active:scale-95 lg:hidden"
						onClick={() => setOpenNav(prev => !prev)}
					>
						<AlignLeft className="size-8" />
					</button>

					{/* LOGO */}

					<Link
						className="font-integral my-auto text-2xl font-black lg:mb-2 lg:text-[2rem]"
						href="/"
					>
						SHOP.CO
					</Link>

					{/* DESKTOP NAVIGATION */}

					<Navigation className="max-lg:hidden" />
				</div>
				<div className="w-full max-lg:hidden">
					<Input />
				</div>

				<div className="flex items-center justify-center gap-4 *:size-6">
					<button
						onClick={() => setShowMobileSearch(prev => !prev)}
						className="z-20 lg:hidden"
					>
						<SearchIcon className="size-6" />
					</button>
					<Link
						href="/cart"
						className="relative"
					>
						<ShoppingCart />
						<span className="absolute -right-2 -top-2 rounded-full bg-zinc-100 px-1 text-sm font-medium">
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
						className="absolute top-full -z-20 min-h-[calc(100dvh-4rem)] w-full lg:!hidden"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setOpenNav(false)}
							className="full-width absolute inset-0 -z-10 size-full"
						/>
						<motion.div
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className="mx-auto h-fit w-[95%] rounded-2xl bg-slate-700/50 px-2 py-5 text-white"
						>
							<Navigation
								className="z-10 h-fit rounded-2xl px-4 py-5 text-black max-lg:mx-auto"
								onClose={() => setOpenNav(false)}
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{showMobileSearch && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute top-full -z-20 min-h-[calc(100dvh-4rem)] w-full lg:!hidden"
					>
						<motion.div
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className="-z-30 mx-auto h-fit w-[95%] rounded-2xl bg-slate-700/50 px-4 py-5 font-serif text-black backdrop-blur-sm"
						>
							<Input />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
