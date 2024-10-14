import { Card, ContainerCards, FeedbackClient, ImageClient, InformationsClient, NameClient } from "./styles";

export default function Cards ({src, name, feedback}) {
    return(
        <ContainerCards>
            <Card>
                <ImageClient src={src} alt={name}/>
                <InformationsClient>
                    <NameClient>{name}</NameClient>
                    <FeedbackClient>{feedback}</FeedbackClient>
                </InformationsClient>
            </Card>
        </ContainerCards>
    )
}