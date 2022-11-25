const Layout = (props: any) => {
	return(
		//<div className="h-screen flex">
		<div className="max-w-full m-auto text-[#646161]">{props.children} </div>
		//</div>
	);
};
export default Layout;