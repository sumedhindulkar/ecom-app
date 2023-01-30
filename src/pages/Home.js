import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import { Grid, Container, Box } from "@mui/material";
function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://odd-lime-anemone-kit.cyclic.app/posts"
      );
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Main />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {posts &&
            posts.map((item) => {
              return (
                <Grid key={item.id} item xs={4}>
                  <Card item={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
