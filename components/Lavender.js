import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

function Lavender() {
  return (
    <>
      <Typography variant="h5" color="#ccc" align="center" p={4}>
        Cluster LAVENDER
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="center"
      >
        <Card
          sx={{
            minWidth: "300px"
          }}
        >
          <Image
            src="/unit/lavender/a1.png"
            layout="responsive"
            alt="Tipe A1"
            width={2882}
            height={2720}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tipe A1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                5 x 10 m<sup>2</sup>
              </p>
              <p>2 Bedroom</p>
              <p>2 Bathroom</p>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: "300px"
          }}
        >
          <Image
            src="/unit/lavender/a2.png"
            alt="Tipe A2"
            layout="responsive"
            width={2875}
            height={2720}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tipe A2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                5 x 12 m<sup>2</sup>
              </p>
              <p>2 Bedroom</p>
              <p>2+1 Bathroom</p>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: "300px"
          }}
        >
          <Image
            src="/unit/lavender/b.png"
            layout="responsive"
            width={2877}
            height={2720}
            alt="Tipe B"            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tipe B
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                5 x 12 m<sup>2</sup>
              </p>

              <p>2 Bedroom</p>
              <p>2+1 Bathroom</p>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default Lavender;
