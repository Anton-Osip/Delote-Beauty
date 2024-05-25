import styled from "styled-components";

type TeamItemPropsType={
    id: string;
    src: string;
    name: string;
    text: string
}

export function TeamItem(props:{item:TeamItemPropsType}) {
    return (
        <StyledTeamItem>
            <Image src={props.item.src} alt={props.item.name} />
            <Name>{props.item.name}</Name>
            <Text>{props.item.text}</Text>
        </StyledTeamItem>
    )
}

const StyledTeamItem=styled.section`
    max-width: 30%;
    background-color: #9defe3;
    margin: 20px;
`
const Image=styled.img``
const Name=styled.p``
const Text=styled.p``
