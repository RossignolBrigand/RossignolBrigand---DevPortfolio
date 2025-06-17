import { useState, useEffect } from "react";

import Section from "../../components/ui/Section/Section";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import HeroSection from "../../components/content/Hero/HeroSection";
import SkillsSection from "../../components/content/Skills/SkillsSection";
import ServicesSection from "../../components/content/Services/ServicesSection";
import ProjectsSection from "../../components/content/Projects/ProjectsSection";
import ContactSection from "../../components/content/Contact/ContactSection";
import Button from "../../components/ui/Button/Button";
import { BsArrowUp } from "react-icons/bs";

//-------------------------------------------------------------------

function HomePage() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > 500) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="home-wrapper">
			<Header />
			<main>
				<Section className={"section--hero"} id={"hero-section"}>
					<HeroSection />
				</Section>
				<Section className={"section--skills"} id={"skills-section"}>
					<SkillsSection />
				</Section>
				<Section className={"section--services"} id={"services-section"}>
					<ServicesSection />
				</Section>
				<Section className={"section--projects"} id={"projects-section"}>
					<ProjectsSection />
				</Section>
				<Section className={"section--contact"} id={"contact-section"}>
					<ContactSection />
				</Section>
				{isScrolled ? (
					<Button
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							})
						}
						children={<BsArrowUp />}
						variant="toTop"
						ariaLabel="Scroll to top"
					/>
				) : null}
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
