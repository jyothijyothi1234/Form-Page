import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CeramicsStudio from "../images/Ceramics Studio.png"
import FoodWebsite from "../images/FoodWebsite.png"
import KFCImage from "../images/KFC Image.png"
import ShopInStyle from "../images/Shop in Style.png"
import irakiTechnologies from "../images/irakiwebsite.png"

function Projects() {
  return (
    <Grid container item xs={12} sx={{  pt: {xs:10,md:20} }}>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: { xs: "", md: "40px" }, fontWeight: "bold" ,pb:5}}
          >
            PROJECTS
          </Typography>
        </Grid>

        <Grid item xs={6}  sx={{pb:15}}>
          <Typography sx={{ fontSize: { xs: "", md: "22px" } }}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6} sx={{ pl: 28 ,pb:15}}>
          <Grid item xs={12} sx={{ height: { xs: "", md: "420px" } }}>
            <img
              src={CeramicsStudio }
              alt="notfound"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 9,
                pb: 3,
                pl: 6,
              }}
            >
              Dopefolio
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "", md: "17px" },
                mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                }
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6} sx={{ pl: 28 ,pb:15}}>
          <Grid item xs={12} sx={{ height: { xs: "", md: "420px" } }}>
            <img
              src={FoodWebsite}
              alt="notfound"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}  >
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 9,
                pb: 3,
                pl: 6,
              }}
            >
              Wilsonport
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Wilsonport is a multiservice logistics and transport company and I
              created their website from scratch using the frontend tools I
              know.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "", md: "17px" },
                mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                }
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6} sx={{ pl: 28 ,pb:15}}>
          <Grid item xs={12} sx={{ height: { xs: "", md: "420px" } }}>
            <img
              src={KFCImage}
              alt="notfound"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 9,
                pb: 3,
                pl: 6,
              }}
            >
              Boreal Coffee Clone
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "", md: "17px" },
                mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                }
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6} sx={{ pl: 28 }}>
          <Grid item xs={12} sx={{ height: { xs: "", md: "420px" } }}>
            <img
              src={ShopInStyle}
              alt="notfound"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 9,
                pb: 3,
                pl: 6,
              }}
            >
              Crown Template
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Crown is a web template that I created targeting the restaurant
              and food industry which anyone can use to present their business
              online.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "", md: "17px" },
                mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                }
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
          </Grid>
          </Grid>

      
        <Grid container item xs={12}  sx={{mt:15}}>
        <Grid item xs={6} sx={{ pl: 28 ,pb:15}}>
          <Grid item xs={12} sx={{ height: { xs: "", md: "450px" } }}>
            <img
              src={irakiTechnologies}
              alt="notfound"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={6}  >
          <Grid item xs={9}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "30px" },
                fontWeight: "bold",
                textAlign: "left",
                pt: 9,
                pb: 3,
                pl: 6,
              }}
            >
              IrakiTechnologies
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: { xs: "", md: "20px" },
                textAlign: "left",
                pl: 6,
              }}
            >
              Wilsonport is a multiservice logistics and transport company and I
              created their website from scratch using the frontend tools I
              know.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                fontWeight: "bold",
                fontSize: { xs: "", md: "17px" },
                mr: 20,
                ":hover":{
                  transform:"translateY(-5px)",
                  transition:"all 400ms"
                }
              }}
            >
              CASE STUDY
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      
  );
}

export default Projects;
