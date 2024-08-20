import BlogCard from './components/blog-card';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Pagination from './components/pagination';
import SearchInput from './components/search-input';
import Tabs from './components/tabs';

const data = [
	{
		id: 1,
		category: 'Technology',
		title: 'The Future of AI in Everyday Life',
		description: 'Exploring how AI is shaping the future and impacting daily activities.',
		author: 'John Doe',
		date: '2024-08-01',
		readTime: '8 min',
	},
	{
		id: 2,
		category: 'Health',
		title: '10 Tips for a Healthier Lifestyle',
		description: 'Simple and effective ways to improve your overall health.',
		author: 'Jane Smith',
		date: '2024-08-02',
		readTime: '5 min',
	},
	{
		id: 3,
		category: 'Travel',
		title: 'Top Destinations for 2024',
		description: 'A guide to the best travel spots to visit this year.',
		author: 'Emily White',
		date: '2024-08-03',
		readTime: '7 min',
	},
	{
		id: 4,
		category: 'Business',
		title: 'How to Start a Successful Business',
		description: 'Key strategies for launching a successful business venture.',
		author: 'Michael Brown',
		date: '2024-08-04',
		readTime: '10 min',
	},
	{
		id: 5,
		category: 'Finance',
		title: "Investing 101: A Beginner's Guide",
		description: 'An introduction to the basics of investing for beginners.',
		author: 'Sarah Johnson',
		date: '2024-08-05',
		readTime: '12 min',
	},
	{
		id: 6,
		category: 'Lifestyle',
		title: 'Minimalism: Living with Less',
		description: 'How to embrace minimalism and declutter your life.',
		author: 'Daniel Green',
		date: '2024-08-06',
		readTime: '6 min',
	},
	{
		id: 7,
		category: 'Education',
		title: 'Online Learning: The New Normal',
		description: 'The rise of online education and its impact on traditional schooling.',
		author: 'Olivia Brown',
		date: '2024-08-07',
		readTime: '9 min',
	},
	{
		id: 8,
		category: 'Entertainment',
		title: 'The Best Movies of 2024 So Far',
		description: 'A roundup of the most popular and critically acclaimed movies this year.',
		author: 'James Wilson',
		date: '2024-08-08',
		readTime: '8 min',
	},
	{
		id: 9,
		category: 'Technology',
		title: '5G Networks: What You Need to Know',
		description: 'Understanding the benefits and challenges of 5G technology.',
		author: 'Sophia Martinez',
		date: '2024-08-09',
		readTime: '7 min',
	},
	{
		id: 10,
		category: 'Food',
		title: 'Delicious Vegan Recipes for Beginners',
		description: 'Easy and tasty vegan recipes to get you started.',
		author: 'William Anderson',
		date: '2024-08-10',
		readTime: '6 min',
	},
	{
		id: 11,
		category: 'Fitness',
		title: 'Home Workouts for Busy Professionals',
		description: 'Quick and effective workouts you can do at home.',
		author: 'Elizabeth Thomas',
		date: '2024-08-11',
		readTime: '5 min',
	},
	{
		id: 12,
		category: 'Travel',
		title: 'Exploring the Wonders of Southeast Asia',
		description: "A traveler's guide to the hidden gems of Southeast Asia.",
		author: 'David Lee',
		date: '2024-08-12',
		readTime: '11 min',
	},
	{
		id: 13,
		category: 'Health',
		title: 'Mental Health: Coping with Stress',
		description: 'Effective strategies for managing stress in daily life.',
		author: 'Maria Hernandez',
		date: '2024-08-13',
		readTime: '7 min',
	},
	{
		id: 14,
		category: 'Finance',
		title: 'Understanding Cryptocurrency',
		description: "A beginner's guide to cryptocurrency and blockchain technology.",
		author: 'Chris Evans',
		date: '2024-08-14',
		readTime: '13 min',
	},
	{
		id: 15,
		category: 'Technology',
		title: 'The Rise of Smart Homes',
		description: 'How smart home technology is transforming our living spaces.',
		author: 'Emma Clark',
		date: '2024-08-15',
		readTime: '9 min',
	},
	{
		id: 16,
		category: 'Education',
		title: 'The Benefits of Lifelong Learning',
		description: "Why continuous education is important in today's world.",
		author: 'Andrew Scott',
		date: '2024-08-16',
		readTime: '8 min',
	},
	{
		id: 17,
		category: 'Business',
		title: 'Networking Tips for Entrepreneurs',
		description: 'How to build a strong professional network as an entrepreneur.',
		author: 'Laura Harris',
		date: '2024-08-17',
		readTime: '10 min',
	},
	{
		id: 18,
		category: 'Lifestyle',
		title: 'Sustainable Living: How to Get Started',
		description: 'Tips for reducing your environmental impact and living sustainably.',
		author: 'Kevin Turner',
		date: '2024-08-18',
		readTime: '7 min',
	},
	{
		id: 19,
		category: 'Entertainment',
		title: 'The Best TV Shows to Binge-Watch',
		description: 'A list of must-watch TV shows for your next binge session.',
		author: 'Rachel Adams',
		date: '2024-08-19',
		readTime: '6 min',
	},
	{
		id: 20,
		category: 'Technology',
		title: 'Virtual Reality: The Next Big Thing?',
		description: 'Exploring the potential of virtual reality in various industries.',
		author: 'Jack Moore',
		date: '2024-08-20',
		readTime: '9 min',
	},
	{
		id: 21,
		category: 'Health',
		title: 'The Importance of Sleep for Well-Being',
		description: 'How sleep affects your physical and mental health.',
		author: 'Alice Carter',
		date: '2024-08-21',
		readTime: '7 min',
	},
	{
		id: 22,
		category: 'Finance',
		title: 'Budgeting Tips for Millennials',
		description: 'Practical advice on managing your finances effectively.',
		author: 'Nathan Rogers',
		date: '2024-08-22',
		readTime: '8 min',
	},
	{
		id: 23,
		category: 'Travel',
		title: 'Solo Travel: Tips for a Safe Journey',
		description: 'Essential tips for traveling alone safely and confidently.',
		author: 'Jessica Stewart',
		date: '2024-08-23',
		readTime: '9 min',
	},
	{
		id: 24,
		category: 'Business',
		title: 'The Power of Branding',
		description: 'How to create a strong brand that resonates with your audience.',
		author: 'Ryan Edwards',
		date: '2024-08-24',
		readTime: '10 min',
	},
	{
		id: 25,
		category: 'Lifestyle',
		title: 'Decluttering Your Home: A Step-by-Step Guide',
		description: 'How to effectively declutter and organize your living space.',
		author: 'Amanda Clark',
		date: '2024-08-25',
		readTime: '7 min',
	},
	{
		id: 26,
		category: 'Technology',
		title: 'The Evolution of Social Media',
		description: 'A look at how social media has changed over the years.',
		author: 'Justin Walker',
		date: '2024-08-26',
		readTime: '9 min',
	},
	{
		id: 27,
		category: 'Health',
		title: 'The Benefits of a Plant-Based Diet',
		description: 'Why more people are choosing plant-based diets for better health.',
		author: 'Megan Hall',
		date: '2024-08-27',
		readTime: '8 min',
	},
	{
		id: 28,
		category: 'Education',
		title: 'The Impact of AI on Education',
		description: 'How artificial intelligence is revolutionizing the education sector.',
		author: 'Anthony Phillips',
		date: '2024-08-28',
		readTime: '10 min',
	},
	{
		id: 29,
		category: 'Travel',
		title: 'A Guide to Sustainable Travel',
		description: 'How to travel responsibly and minimize your environmental impact.',
		author: 'Rebecca King',
		date: '2024-08-29',
		readTime: '9 min',
	},
	{
		id: 30,
		category: 'Business',
		title: 'How to Lead a Remote Team Effectively',
		description: 'Tips and strategies for managing a remote workforce.',
		author: 'Dylan Carter',
		date: '2024-08-30',
		readTime: '11 min',
	},
	{
		id: 31,
		category: 'Entertainment',
		title: 'The Evolution of Video Games',
		description: 'A look back at the history and evolution of video games.',
		author: 'Angela Roberts',
		date: '2024-09-01',
		readTime: '8 min',
	},
	{
		id: 32,
		category: 'Health',
		title: 'The Importance of Regular Exercise',
		description: 'How regular physical activity can improve your health.',
		author: 'Jonathan Brooks',
		date: '2024-09-02',
		readTime: '6 min',
	},
	{
		id: 33,
		category: 'Finance',
		title: 'Retirement Planning: What You Need to Know',
		description: 'Key considerations for planning a secure retirement.',
		author: 'Victoria Barnes',
		date: '2024-09-03',
		readTime: '10 min',
	},
	{
		id: 34,
		category: 'Lifestyle',
		title: 'The Art of Mindfulness',
		description: 'How mindfulness can improve your mental well-being.',
		author: 'Gregory Hughes',
		date: '2024-09-04',
		readTime: '7 min',
	},
	{
		id: 35,
		category: 'Technology',
		title: 'Blockchain Beyond Cryptocurrency',
		description: 'Exploring the potential uses of blockchain technology outside of cryptocurrency.',
		author: 'Samantha Perez',
		date: '2024-09-05',
		readTime: '9 min',
	},
	{
		id: 36,
		category: 'Travel',
		title: 'The Best Hiking Trails in the World',
		description: 'A guide to some of the most beautiful hiking trails around the globe.',
		author: 'Tyler Scott',
		date: '2024-09-06',
		readTime: '12 min',
	},
	{
		id: 37,
		category: 'Business',
		title: 'The Importance of Customer Feedback',
		description: 'How to use customer feedback to improve your business.',
		author: 'Nicole Reed',
		date: '2024-09-07',
		readTime: '8 min',
	},
	{
		id: 38,
		category: 'Health',
		title: 'Staying Hydrated: Why It Matters',
		description: 'The role of hydration in maintaining good health.',
		author: 'Robert Young',
		date: '2024-09-08',
		readTime: '5 min',
	},
	{
		id: 39,
		category: 'Education',
		title: 'How to Improve Your Study Habits',
		description: 'Effective techniques for better studying and retention.',
		author: 'Grace Murphy',
		date: '2024-09-09',
		readTime: '6 min',
	},
	{
		id: 40,
		category: 'Lifestyle',
		title: 'Creating a Balanced Work-Life Routine',
		description: 'Strategies for achieving a healthy work-life balance.',
		author: 'Ethan Howard',
		date: '2024-09-10',
		readTime: '8 min',
	},
	{
		id: 41,
		category: 'Technology',
		title: 'The Ethics of Artificial Intelligence',
		description: 'Exploring the ethical considerations in the development of AI.',
		author: 'Hannah Price',
		date: '2024-09-11',
		readTime: '10 min',
	},
	{
		id: 42,
		category: 'Travel',
		title: "Backpacking Through Europe: A Beginner's Guide",
		description: 'Essential tips for planning a backpacking trip across Europe.',
		author: 'Ryan Mitchell',
		date: '2024-09-12',
		readTime: '11 min',
	},
	{
		id: 43,
		category: 'Entertainment',
		title: 'The Impact of Streaming on the Music Industry',
		description: 'How streaming services are changing the music industry landscape.',
		author: 'Sophia Baker',
		date: '2024-09-13',
		readTime: '7 min',
	},
	{
		id: 44,
		category: 'Finance',
		title: 'Saving for College: What Parents Need to Know',
		description: "A guide for parents on saving for their children's education.",
		author: 'Isaac Foster',
		date: '2024-09-14',
		readTime: '9 min',
	},
	{
		id: 45,
		category: 'Business',
		title: 'The Role of Social Media in Modern Marketing',
		description: 'How social media is shaping contemporary marketing strategies.',
		author: 'Chloe Murphy',
		date: '2024-09-15',
		readTime: '8 min',
	},
	{
		id: 46,
		category: 'Health',
		title: 'The Benefits of Meditation',
		description: 'How meditation can help reduce stress and improve focus.',
		author: 'Alexis Collins',
		date: '2024-09-16',
		readTime: '6 min',
	},
	{
		id: 47,
		category: 'Lifestyle',
		title: 'The Joy of Gardening',
		description: 'How gardening can boost your mental health and well-being.',
		author: 'Ben Taylor',
		date: '2024-09-17',
		readTime: '7 min',
	},
	{
		id: 48,
		category: 'Technology',
		title: 'The Impact of Automation on Jobs',
		description: 'How automation is changing the workforce and what it means for the future.',
		author: 'Lauren Hayes',
		date: '2024-09-18',
		readTime: '10 min',
	},
	{
		id: 49,
		category: 'Entertainment',
		title: 'The Evolution of Pop Culture',
		description: 'A look at how pop culture has evolved over the decades.',
		author: 'Aaron Lee',
		date: '2024-09-19',
		readTime: '8 min',
	},
	{
		id: 50,
		category: 'Business',
		title: 'The Importance of Workplace Diversity',
		description: 'Why diversity is crucial in the modern workplace.',
		author: 'Jessica Wilson',
		date: '2024-09-20',
		readTime: '9 min',
	},
];

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<section className="pt-8">
					<h1 className="flex justify-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
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

				<article className="py-10">
					<div className="mx-auto max-w-fit px-4 sm:px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							{data.slice(0, 5).map((item) => (
								<BlogCard
									category={item.category}
									title={item.title}
									description={item.description}
									author={item.author}
									readTime={item.readTime}
								/>
							))}
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
