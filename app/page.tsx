import BlogCard from './components/blog-card';
import Navbar from './components/navbar';
import Tabs from './components/tabs';

export default function Home() {
	return (
		<main>
			<Navbar />
			<Tabs />
			<BlogCard />
		</main>
	);
}
