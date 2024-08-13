const Login = () => {
	return (
		<main className="flex justify-center">
			<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-[#1F2937] dark:text-gray-800 border-gray-200 border dark:border-[#1F2937]">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold dark:text-white">Sign in</h1>
					<p className="text-sm dark:text-[#9CA3AF]">Sign in to access your account</p>
				</div>
				<form action="" className="space-y-12">
					<div className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 text-sm dark:text-white">
								Email address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="leroy@jenkins.com"
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							/>
						</div>
						<div>
							<div className="flex justify-between mb-2">
								<label htmlFor="password" className="text-sm dark:text-white">
									Password
								</label>
								<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-[#9CA3AF]">
									Forgot password?
								</a>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="*****"
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<div>
							<button
								type="button"
								className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 dark:bg-violet-400 dark:text-gray-900"
							>
								Sign in
							</button>
						</div>
						<p className="px-6 text-sm text-center dark:text-[#9CA3AF]">
							{`Don't have an account yet? `}
							<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400 text-violet-600">
								Sign up
							</a>
							.
						</p>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Login;
