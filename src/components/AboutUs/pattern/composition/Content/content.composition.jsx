import { ButtonAboutUs, ContainerContent, DescriptionAboutUs, TitleAboutUs } from "./styles";

export default function Content ({title, description, textButton}) {
    return(
        <ContainerContent>
            <TitleAboutUs>{title}</TitleAboutUs>
            <DescriptionAboutUs>{description}</DescriptionAboutUs>
            <ButtonAboutUs>{textButton}</ButtonAboutUs>
        </ContainerContent>
    )
}