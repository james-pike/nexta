export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4">
			<div className="inline-block text-center w-full justify-center">
				{children}
			</div>
		</section>
	);
}
