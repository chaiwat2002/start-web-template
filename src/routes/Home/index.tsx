import { useAxios } from "@src/api/axios";
import { Box, Card, CardDescription, CardImg, CardTitle } from "@src/routes/Home/style";
import { Container, Text } from "@src/style";
import { useEffect } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Home = () => {
  const { data, loading, fetchData } = useAxios<Item[]>("GET", "https://fakestoreapi.com/products");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {loading ?
        <Text fontSize="42px">Loading...</Text>
        :
        (
          <Box>
            {data?.map((item) => (
              <Card>
                <CardImg src={item?.image} />
                <CardTitle>{item?.title}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
              </Card>
            ))}
          </Box>
        )}
    </Container >
  )
}
