import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { routes } from "../../App";
const HomePage = styled.div`
  position: relative;
`;

const ClothesImage = styled.img`
  width: 100%;
`;

const SloganContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 40%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Slogan = styled(Typography)`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
`;

const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -25%;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleBuyFromUs = () => {
    navigate(routes.buyFromUs);
  };
  const handleBuyFromYou = () => {
    navigate(routes.buyFromYou);
  };

  return (
    <HomePage>
      <ClothesImage
        src="https://images.pexels.com/photos/8396726/pexels-photo-8396726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Clothes"
      />
      <SloganContainer>
        <Slogan variant="h1">Expect More, Pay Less</Slogan>
      </SloganContainer>
      <CardContainer>
        <Container maxWidth="lg">
          <Grid container spacing={4} justify="left">
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    Why Love Us
                  </Typography>
                  <Typography variant="body2">
                    Our commitment to sustainability goes beyond just providing
                    eco-friendly products. We believe in a circular fashion
                    economy, which is why we encourage our customers to resell
                    their items through our platform. This way, no clothes go to
                    waste, and you can continuously refresh your wardrobe while
                    contributing to a more sustainable future. Join us in
                    embracing a more conscious and fashionable lifestyle!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    Get Shopping
                  </Typography>
                  <Typography variant="body2">
                    Pick your adventure! You can continue today by purchasing
                    from our selection of items or buying second hand for an
                    even cheaper price!
                  </Typography>
                </CardContent>
                <div style={{ padding: "8px", marginTop: "auto" }}>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleBuyFromUs}
                  >
                    Buy from Us
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleBuyFromYou}
                  >
                    Buy from You
                  </StyledButton>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    What We Do
                  </Typography>
                  <Typography variant="body2">
                    We pride ourselves on offering the highest quality, most
                    eco-friendly, and affordable clothing products. Our items
                    are carefully curated to ensure the best materials,
                    sustainable manufacturing practices, and stylish designs.
                    With us, you can enjoy fashion without compromising on
                    ethics or breaking the bank.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <br></br>
          </Grid>
        </Container>
      </CardContainer>
    </HomePage>
  );
};

export default Home;
