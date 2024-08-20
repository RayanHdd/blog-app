interface BlogCardProps {
	category: string;
	title: string;
	description: string;
	author: string;
	readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, description, author, readTime }) => {
	return (
		<main>
			<div className="max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg dark:shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl dark:hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
				{/* Image Section */}
				<img
					className="w-full h-48 object-cover"
					src="https://images.pexels.com/photos/27597900/pexels-photo-27597900/free-photo-of-a-green-meadow-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" // Replace with your image path
					alt="Article"
				/>

				{/* Content Section */}
				<div className="p-6">
					{/* Badge */}
					<span className="inline-block bg-purple-100 dark:bg-purple-200 text-purple-800 text-xs font-semibold tracking-wide px-3 py-1 rounded-md uppercase mb-2">
						{category}
					</span>

					{/* Title */}
					<h2 className="text-xl font-bold mb-2 mt-5">{title}</h2>

					{/* Description */}
					<p className="text-gray-600 dark:text-gray-400 mb-4 h-10">{description}</p>

					{/* Author Section */}
					<div className="flex items-center">
						<img
							className="w-10 h-10 rounded-full mr-4"
							src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" // Replace with your image path
							alt="Author"
						/>
						<div className="text-sm">
							<p className="text-gray-900 dark:text-white leading-none font-semibold">{author}</p>
							<p className="text-gray-500 dark:text-gray-400">{`Aug 15, 2021 · ${readTime} read`}</p>
						</div>
					</div>
					<a href="javascript:;" className="flex mt-8 cursor-pointer text-lg text-blue-600 font-semibold">
						Read more..
					</a>
				</div>
			</div>
		</main>
	);
};

export default BlogCard;
