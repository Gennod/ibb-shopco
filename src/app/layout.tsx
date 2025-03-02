import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import CTASection from '@/components/sections/CTASection'

import './globals.css'
import { Navbar } from '@/components'

const inter = Inter({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Shopco',
	description: 'Created by Ivan Blednov'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} font-satoshi`}>
				<Navbar />
				<main className="pt-20">{children}</main>
				<CTASection />
				<Footer />
			</body>
		</html>
	)
}
