import BlogCard from './components/blog-card';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Pagination from './components/pagination';
import SearchInput from './components/search-input';
import Tabs from './components/tabs';

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section className="pt-8">
					<h1 className="flex justify-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Latest Blogs
					</h1>
					<p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
						Discover blogs that inspire, educate, and entertain. Dive into a world of diverse topics and join our
						community of curious minds.
					</p>
				</section>
				<section className="pt-12 pb-8 px-4">
					<SearchInput />
				</section>
				<Tabs />
				<article className="py-10 ">
					<div className="mx-auto max-w-fit px-4 sm:px-6 lg:px-8">
						<div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
							<BlogCard />
							<BlogCard />
							<BlogCard />
						</div>
					</div>
				</article>
				<Pagination />
			</main>
			<footer className="mt-12">
				<Footer />
			</footer>
		</>
	);
}
