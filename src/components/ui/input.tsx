import * as React from 'react'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		return (
			<div className='relative w-full lg:max-w-[30rem]'>
				<Search className='absolute top-4 left-3 w-[20px] h-[20px]' />
				<input
					placeholder='Search for products...'
					type={type}
					className={cn(
						'flex min-h-10 w-full rounded-full border border-input bg-gray-100 pl-10 pr-4 py-4 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-thin file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
						className
					)}
					ref={ref}
					{...props}
				/>
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
