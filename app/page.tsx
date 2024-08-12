import Image from 'next/image';
import ThemeToggle from './components/theme-toggle';

export default function Home() {
	return (
		<main className="flex justify-center">
			<ThemeToggle />
		</main>
	);
}
