import { Trans, useTranslation } from "react-i18next";
import { DiGithub } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

import ImgContainer from "../../ui/ImgContainer/ImgContainer";
import Button from "../../ui/Button/Button";
import { scrollToElement } from "../../../utils/scrollToElement";

//---------------------------------------------------------------------

export default function HeroSection() {
	const { t } = useTranslation("heroSection");

	return (
		<div className="heroSection">
			<div className="about-container">
				<h2>
					{<Trans i18nKey={t("presentation")} components={{ strong: <strong /> }} />}
				</h2>
				<div className="paragraph-container">
					<p>{t("summary.paragraph1")}</p>
					<p>{t("summary.paragraph2")}</p>
				</div>
				<div className="btn-container">
					{/* Button to download CV */}
					<Button
						href="./assets/downloads/CV_Thomas_PINEAU.pdf"
						target="_blank"
						download
						variant="default">
						{t("cta.cv")}
						<BsFileEarmarkArrowDown />
					</Button>
					<Button
						// href="#contact-section"
						onClick={() => scrollToElement("contact-section", "smooth", 100)}>
						{t("cta.contact")}
					</Button>
					<Button href={import.meta.env.VITE_GITHUB_URL} target="_blank">
						{t("cta.github")}
						<DiGithub />
					</Button>
					<Button href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
						{t("cta.linkedin")}
						<BsLinkedin />
					</Button>
				</div>
			</div>
			<ImgContainer
				src="/assets/images/Hero.jpg"
				alt={"open laptop and books on a table"}
				variant={"default"}
				width={"100%"}
				height={"800px"}
			/>
		</div>
	);
}
