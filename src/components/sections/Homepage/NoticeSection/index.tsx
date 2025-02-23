import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function NoticeSection() {
	return (
		<section className='bg-slate-50 flex w-full flex-col items-center gap-8 py-10 md:py-20'>
			<h2 className='font-bold font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem] uppercase'>
				Важно
			</h2>
			<div className='grid max-w-5xl gap-8 px-4 md:grid-cols-2 items-start'>
				<div className='font-thin'>
					<h3 className='text-xl font-semibold'>Демо проект</h3>
					<p className='mt-5'>
						Это демо проект интернет магазина, сделанный для
						тренировки/демонстрирования моих навыков в веб разработке
					</p>
					<p className='mt-5'>
						В проекте я использовал{' '}
						<Link
							href='https://dummyjson.com/docs/products'
							target='_blank'
							rel='noopener noreferrer'
							className='font-medium text-black hover:underline'
						>
							DummyJSON API.
						</Link>
					</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold'>Тех. стек</h3>
					<ul className='mt-5 font-thin list-inside list-disc space-y-2'>
						<li>Next.js</li>
						<li>UI компоненты реализованы с помощью shadcn/ui</li>
						<li>Стили - TailwindCSS</li>
						<li>В качестве стейт-менеджера использовался Redux Toolkit</li>
						<li>Для работы с API запросами - Axios</li>
					</ul>
				</div>
				<div className='flex flex-col gap-5'>
					<h3 className='text-xl font-semibold'>Использованный дизайн</h3>
					<div className='flex items-start justify-start gap-4 max-md:flex-col'>
						<Link
							href='https://www.figma.com/community/file/1273571982885059508'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-transform hover:scale-105'
						>
							<span>Шаблон Figma</span>
						</Link>
						<Link
							href='https://github.com/Gennod/ibb-shopco'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 rounded-lg border border-black px-6 py-3 transition-transform hover:scale-105'
						>
							<FaGithub className='size-5' />
							<span>Исходный код</span>
						</Link>
					</div>
				</div>
				<div>
					<h3 className='text-xl font-semibold'>Референс</h3>
					<p className='mt-5 font-thin'>
						Спасибо{' '}
						<Link
							href='https://github.com/AJ1732'
							target='_blank'
							rel='noopener noreferrer'
							className='font-medium text-black hover:underline'
						>
							AJ1732
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
