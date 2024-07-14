import Container from "@/app/components/container";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";

const PageLayout = (props) => {
	return (
		<div>
			<Header {...props.params} />
			<Container>{props.children}</Container>
			<Footer {...props.params} />
		</div>
	);
};

export default PageLayout;
