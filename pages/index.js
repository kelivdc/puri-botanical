import {
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, WhatsApp } from "@mui/icons-material";
import Footer from "../components/Footer";
import Lavender from "../components/Lavender";
import Magnolia from "../components/Magnolia";

function Home() {
  const [mnuDrawer, setMnuDrawer] = useState(false);
  const handleDrawerClose = (event) => {
    setMnuDrawer(false);
  };
  const handleDrawerOpen = () => {
    setMnuDrawer(true);
  };
  return (
    <>
      <Head>
        <title>Puri Botanical - Rumah 2 lantai - Jakarta Barat</title>
      </Head>
      <Box pl={2} margin="auto" mt="20px" display="relative">
        <Stack direction="row" justifyContent="space-between">
          <Image src="/logo.png" width={200} height={35} alt="Logo"/>
          <IconButton
            sx={{
              marginRight: "15px",
            }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Box>
      <Drawer anchor="right" open={mnuDrawer} onClose={handleDrawerClose}>
        <Box>
          <IconButton onClick={handleDrawerClose}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <Box minWidth="300px">
          <List>
            <ListItem>
              <ListItemButton>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Unit</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Lokasi</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Hubungi</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        bgcolor={"#c8a97e"}
        minHeight={{ xs: "50vh", md: "80vh" }}
        mt={{ xs: "40px", md: "80px" }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} p={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="#fff">
              KONSEP LINGKUNGAN HIJAU
            </Typography>
            <Box lineHeight={1.5} color="#222" letterSpacing={1}>
              <p>
                Puri Botanical Cluster Lavender dibuat khusus untuk keluarga
                yang mencari pengalaman hidup berkualitas tinggi. Selanjutnya
                setiap aspek dalam pembuatan cluster ini ditempatkan dengan
                hati-hati dan dibuat dengan presisi.
              </p>
              <p>
                Semua hal dipertimbangkan dengan matang, cluster ini benar-benar
                cocok untuk pengalaman baru keluarga dan memahami kehangatan
                kenangan. Serta lingkungan yang asri dan hijau
              </p>
              <Button
                variant="contained"
                disableElevation
                size="large"
                color="success"
              >
                Start Rp. 1,7M an
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/cluster.png"
              layout="responsive"
              width={2481}
              height={1900}
              alt="Cluster Puri Botanical"
            />
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor={"#f0f0f0"} minHeight={{ xs: "50vh", md: "80vh" }}>
        <Grid container spacing={{ xs: 4, md: 6 }} p={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Image
              src="/spec.png"
              layout="responsive"
              width={2481}
              height={1900}
              alt="Tentang Puri Botanical"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" color="#555">
              Tentang Puri Botanical
            </Typography>
            <Box lineHeight={1.5} color="#222" letterSpacing={1}>
              <p>
                Puri Botanical merupakan kawasan yang dikelola oleh pengembang
                yang sudah terpercaya dengan komitmen yang sudah terbukti dalam
                konsep perpaduan antara kehidupan hijau yang asri dan perkotaan.
                Puri Botanical akan menempati area seluas 34 hektar dan akan
                mencakup apartemen resort, fasilitas gaya hidup hijau, gedung
                pencakar langit ikonik, hotel resort, kondominium mewah, taman
                kantor hijau, dan mal / pusat perbelanjaan.
              </p>
              <p>
                Semua hal dipertimbangkan dengan matang, cluster ini benar-benar
                cocok untuk pengalaman baru keluarga dan memahami kehangatan
                kenangan.
              </p>
              <Button
                variant="contained"
                disableElevation
                size="large"
                color="success"
              >
                Hubungi
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor={"#555"} minHeight={{ xs: "50vh", md: "80vh" }} p={4}>
        <Typography variant="h5" color="#fff" align="center">
          UNIT
        </Typography>
        <Lavender />
        <hr />
        {/* <Magnolia /> */}
      </Box>      
      <Footer />
    </>
  );
}

export default Home;
