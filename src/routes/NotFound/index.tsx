import { Button, Container, Heading, PageWrapper, Paragraph, SubHeading, TextWrapper } from "@src/routes/NotFound/style"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <Container>
        <TextWrapper>
          <Heading>404</Heading>
          <SubHeading>UH OH! You're lost.</SubHeading>
          <Paragraph>The page you are looking for does not exist.</Paragraph>
          <Button onClick={() => navigate("/")}>HOME</Button>
        </TextWrapper>
      </Container>
    </PageWrapper>
  )
}
