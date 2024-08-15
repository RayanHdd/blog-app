import BlogCard from './components/blog-card';
import Navbar from './components/navbar';
import SearchInput from './components/search-input';
import Tabs from './components/tabs';

export default function Home() {
	return (
		<main>
			<Navbar />
			<section className="pt-10">
				<h2 className="font-manrope text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
					Latest Blogs
				</h2>
				<div className="pb-10">
					<SearchInput />
				</div>
			</section>
			<Tabs />
			<section className="py-10 ">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
			</section>
		</main>
	);
}
