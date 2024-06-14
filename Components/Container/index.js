/* eslint-disable react/prop-types */
export default function BasicContainer({ className="", children="" }) {

	return (
		<div className={`h-[100vh] snap-center ${className} overflow-auto overflow-x-hidden`}>
			{children}
		</div>
	);
}
