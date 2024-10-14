import {
  ButtonInput,
  ContainerNewsletter,
  Input,
  InputContainer,
  Section,
  SectionContent,
  SubscribeDescription,
  SubscribeTitle,
} from "./styles";

export default function Newsletter({ title, description, text, textButton }) {
  return (
    <ContainerNewsletter>
      <Section>
        <SectionContent>
          <SubscribeTitle>{title}</SubscribeTitle>
          <SubscribeDescription>{description}</SubscribeDescription>
        </SectionContent>
        <InputContainer>
          <Input placeholder={text} />
          <ButtonInput>{textButton}</ButtonInput>
        </InputContainer>
      </Section>
    </ContainerNewsletter>
  );
}
