import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Divider from "@mui/material/Divider";
function Magnolia() {
  return (
   <>
      <Typography variant="h5" color="#ccc" align="center" p={4}>
        Cluster MAGNOLIA
      </Typography>
       <Box
       margin={{ xs: "0", md: "auto" }}
       sx={{
         marginTop: "20px",
         maxWidth: "80%",
       }}
     >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: "300px",
            }}
          >
            <Image
              src="/unit/magnolia/gracia.jpg"
              layout="responsive"
              width={540}
              height={680}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gracia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  6 x 20 m<sup>2</sup>
                </p>
                <p>3+1 Bedroom</p>
                <p>3+1 Bathroom</p>
                <p>1 Car park</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: "300px",
            }}
          >
            <Image
              src="/unit/magnolia/magnolia.jpg"
              layout="responsive"
              width={540}
              height={680}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Magnolia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  6 x 20 m<sup>2</sup>
                </p>
                <p>4+1 Bedroom</p>
                <p>4+1 Bathroom</p>
                <p>2 Car park</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: "300px",
            }}
          >
            <Image
              src="/unit/magnolia/indica.png"
              layout="responsive"
              width={549}
              height={680}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Indica <Chip color="success" label="SOLD OUT" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  8 x 20 m<sup>2</sup>
                </p>
                <p>5+1 Bedroom</p>
                <p>5+1 Bathroom</p>
                <p>2 Car park</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: "300px",
            }}
          >
            <Image
              src="/unit/magnolia/chrysta.png"
              layout="responsive"
              width={549}
              height={680}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chrysta <Chip color="success" label="SOLD OUT" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  8 x 20 m<sup>2</sup>
                </p>
                <p>5+1 Bedroom</p>
                <p>7+1 Bathroom</p>
                <p>2 Car park</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              minWidth: "300px",
            }}
          >
            <Image
              src="/unit/magnolia/grandis.png"
              layout="responsive"
              width={549}
              height={680}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Grandis <Chip color="success" label="SOLD OUT" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  11 x 20 m<sup>2</sup>
                </p>
                <p>4+1 Bedroom</p>
                <p>5+1 Bathroom</p>
                <p>2 Car park</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Magnolia;
