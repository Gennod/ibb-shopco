import { Navbar } from '@/components'
import CTASection from '@/components/sections/CTASection'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Shopco',
	description: 'Created by Ivan Blednov',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} font-satoshi`}>
				<header className='text-black fixed z-50 w-full bg-white border-b border-black/10'>
					<Navbar />
				</header>
				<main className='pt-20'>{children}</main>
				<CTASection />
			</body>
		</html>
	)
}
