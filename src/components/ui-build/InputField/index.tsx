'use client'

import { cn } from '@/lib/utils'
import { Eye, EyeOff, Lock, LucideProps } from 'lucide-react'
import * as React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	startIcon?: React.ReactElement<LucideProps>
	endIcon?: React.ReactElement<LucideProps>
	iconProps?: LucideProps
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, startIcon, endIcon, iconProps = {}, ...props }, ref) => {
		const [show, setShow] = React.useState(false)
		const { className: iconClassName, ...iconRest } = iconProps

		if (type === 'password') {
			return (
				<div className='relative w-full'>
					<div className='absolute left-4 top-1/2 -translate-y-1/2 transform'>
						<Lock
							size={'1.5rem'}
							className={cn('text-muted-foreground', iconClassName)}
							{...iconRest}
						/>
					</div>
					<input
						autoComplete='off'
						type={!show ? type : 'text'}
						className={cn(
							'border-input bg-background ring-offset-background placeholder:text-muted-foreground flex min-h-10 w-full rounded-full border px-12 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base',
							className
						)}
						ref={ref}
						{...props}
					/>
					<button
						onClick={() => setShow(prev => !prev)}
						className='absolute right-3 top-1/2 -translate-y-1/2 transform'
						type='button'
					>
						{show ? (
							<Eye className='stroke-slate-700/70' size={'1.5rem'} />
						) : (
							<EyeOff className='stroke-slate-700/70' size={'1.5rem'} />
						)}
					</button>
				</div>
			)
		}

		return (
			<div className='relative'>
				{startIcon && (
					<div className='absolute left-4 top-1/2 -translate-y-1/2 transform'>
						{React.cloneElement(startIcon, {
							size: 24,
							className: cn('text-muted-foreground', iconClassName),
							...iconRest,
						})}
					</div>
				)}
				<input
					type={type}
					className={cn(
						'border-input bg-background text-zinc-900 placeholder:text-black/40 ring-offset-background placeholder:text-muted-foreground flex min-h-10 w-full rounded-full border px-8 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base',
						startIcon ? 'pl-12' : '',
						endIcon ? 'pr-12' : '',
						className
					)}
					ref={ref}
					{...props}
				/>
				{endIcon && (
					<div className='absolute right-3 top-1/2 -translate-y-1/2 transform'>
						{React.cloneElement(endIcon, {
							size: 24,
							className: cn('text-muted-foreground', iconClassName),
							...iconRest,
						})}
					</div>
				)}
			</div>
		)
	}
)

InputField.displayName = 'Input'

export default InputField
