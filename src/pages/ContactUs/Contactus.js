// import React, { useState } from "react";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";
// import TextField from "@mui/material/TextField";

// // REACT-ROUTER-DOM
// import { Link } from "react-router-dom";

// import videotwo from "../../assets/video/VideoWithoutText.mp4";

// // CSS
// import "./Contactus.css";

// // IMAGES
// import address from "../../assets/images/address.png";
// import call from "../../assets/images/call.png";
// import Gmail from "../../assets/images/email.png";

// // post
// import { submitContactDetails } from "../../redux/actions/Contactus";
// import { getType, submitenquiry } from "../../redux/actions/Outdoor";

// // Toastify
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getBlogId } from "../../redux/actions/Blog";
// import { Helmet } from "react-helmet";

// const Contactus = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setMessage("");
//     setCity("");
//   };

//   const handleSubmit = () => {
//     // Check if required fields are not empty
//     if (!name || !email || !city || !phone || !message) {
//       // Display an error message using Toastify
//       toast.error("Please fill in all required fields");
//       return;
//     }

//     submitContactDetails({
//       name: name,
//       email: email,
//       phone: Number(phone),
//       message: message,
//       city: city,
//     }).then(() => {
//       // Display a success message using Toastify
//       toast.success("Thanks, we will contact you soon");

//       resetForm();
//     });
//   };
//   return (
//     <>
//       <Helmet>
//         <title>ReachOut Hoarding: Your Best Outdoor Advertising Partner</title>
//         <meta
//           name="description"
//           content={
//             "Contact Reach Out Hoarding for top-notch outdoor hoarding advertising partner. Let us amplify your brand's visibility and impact on the streets"
//           }
//         />
//       </Helmet>

//       <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
//         {/* VIDEO */}
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={12}
//             lg={12}
//             // display={{ xs: "none", lg: "block" }}
//           >
//             <Box
//               sx={{
//                 width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                 height: { xs: "30vh", sm: "30vh", md: "60vh", lg: "60vh" },
//               }}
//             >
//               <video
//                 src={videotwo}
//                 autoPlay
//                 loop
//                 muted
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//               {/* <Box className="container"> */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   top: {
//                     xs: "110px",
//                     sm: "110px",
//                     md: "130px",
//                     lg: "130px",
//                   },
//                   width: "100%",
//                   // backgroundColor:"orange"
//                 }}
//               >
//                 {/* Text */}
//                 <Grid container>
//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={0.7}
//                     lg={0.7}
//                     // sx={{ backgroundColor: "blue" }}
//                   ></Grid>

//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={10.6}
//                     lg={10.6}
//                     // sx={{ backgroundColor: "red" }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       {/* TEXT 1 */}
//                       <Box>
//                         <Typography
//                           sx={{
//                             display: "flex",
//                             fontSize: {
//                               xs: "0px",
//                               sm: "0px",
//                               md: "50px",
//                               lg: "50px",
//                             },
//                             fontWeight: {
//                               xs: "0",
//                               sm: "0",
//                               md: "600",
//                               lg: "600",
//                             },
//                             fontFamily: "Poppins, sans-serif",
//                             color: "#fff",
//                           }}
//                         >
//                           Contact Us
//                         </Typography>
//                       </Box>
//                       {/* for mobile */}
//                       <Box sx={{}}>
//                         <Typography
//                           sx={{
//                             display: "flex",
//                             fontSize: {
//                               xs: "60px",
//                               sm: "60px",
//                               md: "0px",
//                               lg: "0px",
//                             },
//                             fontWeight: {
//                               xs: "500",
//                               sm: "500",
//                               md: "0",
//                               lg: "0",
//                             },
//                             paddingLeft: "10px",
//                             paddingRight: "10px",
//                             fontFamily: "Poppins, sans-serif",
//                             color: "#fff",
//                             justifyContent: "center",
//                             textAlign: "center",
//                             lineHeight: "60px",
//                           }}
//                         >
//                           Contact
//                           <br /> Us
//                         </Typography>
//                       </Box>

//                       {/* TEXT 2 */}
//                       <Box
//                         sx={{
//                           marginTop: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             display: "flex",
//                             justifyContent: {
//                               xs: "center",
//                               sm: "center",
//                               md: "center",
//                               lg: "center",
//                             },
//                             alignItems: {
//                               xs: "center",
//                               sm: "center",
//                               md: "center",
//                               lg: "center",
//                             },
//                             fontSize: {
//                               xs: "15px",
//                               sm: "15px",
//                               md: "20px",
//                               lg: "20px",
//                             },
//                             fontWeight: {
//                               xs: "500",
//                               sm: "500",
//                               md: "500",
//                               lg: "500",
//                             },
//                             fontFamily: "Poppins, sans-serif",
//                             color: "#fff",
//                             marginTop: "-5px",
//                           }}
//                         >
//                           {/* Transit Media Advertising Company */}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Grid>

//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={0.7}
//                     lg={0.7}
//                     // sx={{ backgroundColor: "green" }}
//                   ></Grid>
//                 </Grid>

//                 {/* DROP-DOWN GRID */}
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       <Grid
//         container
//         sx={{
//           marginTop: {
//             xs: "20px",
//             sm: "20px",
//             md: "120px",
//             lg: "120px",
//           },
//           marginBottom: {
//             xs: "20px",
//             sm: "20px",
//             md: "100px",
//             lg: "100px",
//           },
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={5.3}
//           lg={5.3}
//           sx={{
//             // display: "flex",
//             // justifyContent: "center",
//             // alignItems: "center",
//             // backgroundColor: "red",
//           }}
//         >
//           <Box>
//             <Box
//               sx={{
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "25px",
//                   lg: "25px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "16px",
//                     sm: "16px",
//                     md: "18px",
//                     lg: "18px",
//                   },
//                   fontWeight: "500",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Have questions or need assistance? Reach out to us; your
//                 satisfaction is our priority. We're just a message away!
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//               }}
//             >
//               {/* Address */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "flex-start",
//                   marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
//                 }}
//               >
//                 <Box>
//                   <img
//                     src={address}
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Box>
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "15px",
//                       fontWeight: "500",
//                       fontFamily: "Poppins, sans-serif",
//                       marginLeft: "10px",
//                       marginTop: "3px",
//                       color: "rgb(79, 74, 76)",
//                     }}
//                   >
//                     66 Building No, 2nd Floor, Janpath, Connaught Place, New Delhi, 110001
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* PhoneNo */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "flex-start",
//                   marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
//                 }}
//               >
//                 <Box>
//                   <img src={call} style={{ width: "20px", height: "20px" }} />
//                 </Box>
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "15px",
//                       fontWeight: "500",
//                       fontFamily: "Poppins, sans-serif",
//                       marginLeft: "10px",
//                       marginTop: "3px",
//                       color: "rgb(79, 74, 76)",
//                     }}
//                   >
//                     +91 96507-64004
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Email */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "flex-start",
//                   marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
//                 }}
//               >
//                 <Box>
//                   <img src={Gmail} style={{ width: "20px", height: "20px" }} />
//                 </Box>
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "15px",
//                       fontWeight: "500",
//                       fontFamily: "Poppins, sans-serif",
//                       marginLeft: "10px",
//                       marginTop: "3px",
//                       color: "rgb(79, 74, 76)",
//                     }}
//                   >
//                     birender@januskoncepts.com
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={5.3}
//           lg={5.3}
//           // sx={{ backgroundColor: "green" }}
//         >
//           <Box
//             sx={{
//               paddingLeft: {
//                 xs: "20px",
//                 sm: "20px",
//                 md: "0px",
//                 lg: "0px",
//               },
//               paddingRight: {
//                 xs: "20px",
//                 sm: "20px",
//                 md: "0px",
//                 lg: "0px",
//               },
//               marginTop: {
//                 xs: "20px",
//                 sm: "20px",
//                 md: "0px",
//                 lg: "0px",
//               },
//             }}
//           >
//             {/* Name n Email */}
//             <Grid container>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 // sx={{ backgroundColor: "pink" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
//                     marginBottom: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingLeft: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingRight: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <TextField
//                     id="outlined-basic"
//                     label="Name*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                     }}
//                     value={name}
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                   />
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 // sx={{ backgroundColor: "cyan" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
//                     marginBottom: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "5px",
//                       lg: "5px",
//                     },

//                     paddingLeft: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingRight: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <TextField
//                     id="outlined-basic"
//                     label="Email*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                     }}
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                   />
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Pincode n City */}
//             <Grid container>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 // sx={{ backgroundColor: "pink" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     marginBottom: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "0px",
//                       lg: "0px",
//                     },
//                     paddingLeft: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingRight: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <TextField
//                     id="outlined-basic"
//                     label="City*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                     }}
//                     value={city}
//                     onChange={(e) => {
//                       setCity(e.target.value);
//                     }}
//                   />
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 // sx={{ backgroundColor: "cyan" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     marginBottom: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "0px",
//                       lg: "0px",
//                     },
//                     paddingLeft: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingRight: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <TextField
//                     id="outlined-basic"
//                     label="Phone*"
//                     variant="outlined"
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                     }}
//                     value={phone}
//                     onChange={(e) => {
//                       setPhone(e.target.value);
//                     }}
//                   />
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Messsage */}
//             <Grid
//               container
//               //  sx={{ backgroundColor: "pink" }}
//             >
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={12}
//                 lg={12}
//                 // sx={{ backgroundColor: "pink" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginTop: {
//                       xs: "5px",
//                       sm: "5px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     paddingLeft: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                     paddingRight: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <TextField
//                     id="outlined-multiline-static"
//                     label="Message"
//                     multiline
//                     rows={2}
//                     sx={{
//                       width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                     }}
//                     value={message}
//                     onChange={(e) => {
//                       setMessage(e.target.value);
//                     }}
//                   />
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Button */}
//             <Grid container>
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: {
//                       xs: "center",
//                       sm: "center",
//                       md: "flex-start",
//                       lg: "flex-start",
//                     },
//                     paddingLeft: {
//                       xs: "10px",
//                       sm: "10px",
//                       md: "5px",
//                       lg: "5px",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       marginTop: {
//                         xs: "15px",
//                         sm: "15px",
//                         md: "20px",
//                         lg: "20px",
//                       },
//                       marginBottom: {
//                         xs: "5px",
//                         sm: "5px",
//                         md: "10px",
//                         lg: "10px",
//                       },
//                       display: "flex",
//                       justifyContent: {
//                         xs: "center",
//                         sm: "center",
//                         md: "center",
//                         lg: "center",
//                       },
//                       alignItems: "center",
//                       width: {
//                         xs: "120px",
//                         sm: "120px",
//                         md: "115px",
//                         lg: "115px",
//                       },
//                       height: {
//                         xs: "40px",
//                         sm: "40px",
//                         md: "40px",
//                         lg: "40px",
//                       },
//                       backgroundColor: "#C02222",
//                       borderRadius: "20px",
//                     }}
//                     onClick={handleSubmit}
//                   >
//                     <Typography
//                       sx={{
//                         fontSize: {
//                           xs: "15px",
//                           sm: "15px",
//                           md: "15px",
//                           lg: "15px",
//                         },
//                         fontFamily: "Poppins, sans-serif",
//                         fontWeight: "600",
//                         color: "white",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Submit
//                     </Typography>
//                   </Box>
//                   {/* <Box>
//                       <Button onClick={getBlogId}> get id</Button>
//                     </Box> */}
//                 </Box>
//               </Grid>
//               <ToastContainer
//                 position="top-center"
//                 autoClose={3000}
//                 toastStyle={{ top: "80px" }}
//               />
//             </Grid>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "green" }}
//         ></Grid>
//       </Grid>
//     </>
//   );
// };

// export default Contactus;

// import React , { useState} from "react";

// // MUI
// import { makeStyles } from "@mui/styles";

// // MUI
// import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";

// // CSS
// import "./Contactus.css";

// // Images
// import {
//   outdoorBanner,
//   ourServicesbanner,
//   weSeeThingsBgImage,
//   locationIcon,
//   CallIcon,
//   locationMail,
// } from "../../DesignData/Images/Images";

// import {
//   TopBannerMainTitle,
//   MainMargins,
//   ContactUsInputStyle,
//   MessageInputStyle,
// } from "../Styles/Styles";

// const useStyles = makeStyles(() => ({
//   bgImage: {
//     backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${outdoorBanner})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     height: "400px",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   OurServicsBanner: {
//     backgroundImage: `url(${ourServicesbanner})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   aboutOutdoorAdver: {
//     backgroundImage: `url(${weSeeThingsBgImage})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   },
//   sideGridBgColor: {
//     // backgroundColor: "yellow",
//   },
//   MainGridBgColor: {
//     // backgroundColor: "pink",
//   },
// }));
// const Contactus = () => {
//   const classes = useStyles();
//   return (
//     <>
//       {/* Banner */}
//       <Grid container className={classes.bgImage}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           className={classes.sideGridBgColor}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={11}
//           lg={11}
//           className={classes.MainGridBgColor}
//           // display={{
//           //   xs: "none",
//           //   sm: "none",
//           //   md: "block",
//           //   lg: "block",
//           // }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//             }}
//           >
//             <Box>
//               <Typography sx={TopBannerMainTitle}>
//                 Contact<span style={{ color: "#FF1F2F" }}> Us</span>
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           className={classes.sideGridBgColor}
//         ></Grid>
//       </Grid>

//       {/* Form */}
//       <Grid container className={classes.OurServicsBanner}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           className={classes.sideGridBgColor}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={11}
//           lg={11}
//           className={classes.MainGridBgColor}
//         >
//           <Box sx={MainMargins}>
//             <Grid container>
//               {/* address grid */}
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 // sx={{ backgroundColor: "red" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     height: "160px",
//                   }}
//                 >
//                   {/* query msg */}
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: "#FF1F2F",
//                         color: "White",
//                         fontSize: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "16px",
//                           lg: "16px",
//                         },
//                         fontWeight: {
//                           xs: "600",
//                           sm: "600",
//                           md: "500",
//                           lg: "500",
//                         },
//                         fontFamily: "Inter, sans-serif",
//                       }}
//                     >
//                       Have questions or need assistance? Reach out to us; your
//                       satisfaction is our priority. We're just a message away!
//                     </Typography>
//                   </Box>
//                   {/* Address */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={locationIcon}
//                       sx={{
//                         width: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                         height: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                       }}
//                     />
//                     <Typography
//                       sx={{
//                         color: "#FF1F2F",
//                         color: "White",
//                         fontSize: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "14px",
//                           lg: "14px",
//                         },
//                         fontWeight: {
//                           xs: "600",
//                           sm: "600",
//                           md: "500",
//                           lg: "500",
//                         },
//                         fontFamily: "Inter, sans-serif",
//                       }}
//                     >
//                       &nbsp; 66 Building No, 2nd Floor, Janpath, Connaught
//                       Place, New Delhi, 110001
//                     </Typography>
//                   </Box>
//                   {/* Call */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={CallIcon}
//                       sx={{
//                         width: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                         height: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                       }}
//                     />
//                     <Typography
//                       sx={{
//                         color: "#FF1F2F",
//                         color: "White",
//                         fontSize: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "14px",
//                           lg: "14px",
//                         },
//                         fontWeight: {
//                           xs: "600",
//                           sm: "600",
//                           md: "500",
//                           lg: "500",
//                         },
//                         fontFamily: "Inter, sans-serif",
//                       }}
//                     >
//                       &nbsp;&nbsp;+91 96507-64004
//                     </Typography>
//                   </Box>
//                   {/* mail */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={locationMail}
//                       sx={{
//                         width: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                         height: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "20px",
//                           lg: "20px",
//                         },
//                       }}
//                     />
//                     <Typography
//                       sx={{
//                         color: "#FF1F2F",
//                         color: "White",
//                         fontSize: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "14px",
//                           lg: "14px",
//                         },
//                         fontWeight: {
//                           xs: "600",
//                           sm: "600",
//                           md: "500",
//                           lg: "500",
//                         },
//                         fontFamily: "Inter, sans-serif",
//                       }}
//                     >
//                       &nbsp;&nbsp;birender@januskoncepts.com
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//               {/* inputs grid */}
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 sx={{
//                   // backgroundColor: "green",
//                   display: "flex",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: "90%",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     height: "200px",
//                   }}
//                 >
//                   {/* name and email */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <input
//                       type="email"
//                       // value={email}
//                       // onChange={(e) => setEmail(e.target.value)}
//                       required
//                       placeholder="Name"
//                       className="inputField"
//                       style={ContactUsInputStyle}
//                       aria-label="Enter your email"
//                     />
//                     <input
//                       type="email"
//                       // value={email}
//                       // onChange={(e) => setEmail(e.target.value)}
//                       required
//                       placeholder="Email"
//                       className="inputField"
//                       style={ContactUsInputStyle}
//                       aria-label="Enter your email"
//                     />
//                   </Box>
//                   {/* name and email */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <input
//                       type="email"
//                       // value={email}
//                       // onChange={(e) => setEmail(e.target.value)}
//                       required
//                       placeholder="City"
//                       className="inputField"
//                       style={ContactUsInputStyle}
//                       aria-label="Enter your email"
//                     />
//                     <input
//                       type="email"
//                       required
//                       placeholder="Phone"
//                       className="inputField"
//                       style={ContactUsInputStyle}
//                       aria-label="Enter your email"
//                     />
//                   </Box>
//                   {/* Message */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <textarea
//                       id="messageInput"
//                       required
//                       placeholder="Enter your message"
//                       className="inputField"
//                       style={MessageInputStyle}
//                       aria-label="Enter your message"
//                       rows={4} // Number of visible text lines
//                       cols={50} // Width of the text area (optional)
//                     />
//                   </Box>
//                   {/* Submit Button */}
//                 </Box>
// <Box sx={{ marginTop: "15px" }}>
//   <button
//     style={{
//       width: "100px",
//       backgroundColor: "#FF1F2F",
//       height: "40px",
//       borderRadius: "10px",
//     }}
//   >
//     <Typography
//       sx={{
//         color: "white",
//         fontSize: "13px",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       SUBMIT
//     </Typography>
//   </button>
// </Box>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           className={classes.sideGridBgColor}
//         ></Grid>
//       </Grid>
//     </>
//   );
// };

// export default Contactus;

import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
// MUI
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";

// CSS
import "./Contactus.css";

// Images
import {
  outdoorBanner,
  ourServicesbanner,
  weSeeThingsBgImage,
  locationIcon,
  CallIcon,
  locationMail,
} from "../../DesignData/Images/Images";

import {
  TopBannerMainTitle,
  MainMargins,
  ContactUsInputStyle,
  MessageInputStyle,
  inputsMargins,
} from "../Styles/Styles";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${outdoorBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  OurServicsBanner: {
    backgroundImage: `url(${ourServicesbanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutOutdoorAdver: {
    backgroundImage: `url(${weSeeThingsBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {},
  MainGridBgColor: {},
}));

const Contactus = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://www.januskoncepts.in/janusoohadmin/api/form/form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      // const data = await response.json();
      // Handle success
      if (response) {
        toast.success("Form submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          city: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Form submission failed. Please try again.");
    }
  };
  return (
    <>
      {/* Banner */}
      <Grid container className={classes.bgImage}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={TopBannerMainTitle}>
                Contact<span style={{ color: "#FF1F2F" }}> Us</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>

      {/* Form */}
      <Grid container className={classes.OurServicsBanner}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
          <Box sx={MainMargins}>
            <Grid container>
              {/* Address grid */}
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                // sx={{ backgroundColor: "pink" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    height: "100%",
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  {/* Query message */}
                  <Box >
                    <Typography
                      sx={{
                        color: "#FF1F2F",
                        fontSize: {
                          xs: "18px",
                          sm: "18px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "600",
                          sm: "600",
                          md: "500",
                          lg: "500",
                        },
                        lineHeight: {
                          xs: "22px",
                          sm: "22px",
                          md: "22px",
                          lg: "22px",
                        },
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Have questions or need assistance? Reach out to us; your
                      satisfaction is our priority. We're just a message away!
                    </Typography>
                  </Box>
                  <Box sx={{
                    marginTop:{
                      xs:"0px",
                      sm:"0px",
                      md:"10px",
                      lg:"10px"
                    }
                  }}>
                  {/* Address */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "none",
                      },
                      justifyContent: "space-between",
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      // backgroundColor: "green",
                    }}
                  >
                    <Box
                      component="img"
                      src={locationIcon}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginTop: {
                          xs: "4px",
                          sm: "4px",
                          md: "4px",
                          lg: "4px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        66 , Second Floor , Atul Grove Road, Janpath , Connaught
                        place , New Delhi , Delhi 110001
                      </Typography>
                    </Box>
                  </Box>
                  {/* Call */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={CallIcon}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginTop: {
                          xs: "4px",
                          sm: "4px",
                          md: "4px",
                          lg: "4px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        +91 96507-64004
                      </Typography>
                    </Box>
                  </Box>
                  {/* Mail */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={locationMail}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        birender@januskoncepts.com
                      </Typography>
                    </Box>
                  </Box>
                  </Box>
                </Box>
              </Grid>
              {/* Inputs grid */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <form onSubmit={handleSubmit}>
                  {/* name and email */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                      },
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                      },
                    }}
                  >
                    {/* Name */}
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                    {/* Email */}
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                  </Box>
                  {/* city and phone */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                      },
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                      },
                    }}
                  >
                    {/* city */}
                    <Box sx={inputsMargins}>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                    {/* phone */}
                    <Box sx={inputsMargins}>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                  </Box>
                  {/* message */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      padding: {
                        xs: "0px 50px 0px 50px",
                        sm: "0px 50px 0px 50px",
                        md: "0px 0px 0px 0px",
                        lg: "0px 0px 0px 0px",
                      },
                    }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Message"
                      className="textareaField"
                      autoComplete="off"
                      style={MessageInputStyle}
                    />
                  </Box>
                  {/* Submit button */}
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                    }}
                  >
                    <button
                      type="submit"
                      style={{
                        width: "100px",
                        backgroundColor: "#FF1F2F",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "13px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        SUBMIT
                      </Typography>
                    </button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>
    </>
  );
};

export default Contactus;
