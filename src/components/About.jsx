
import { Grid,Container,useTheme,useMediaQuery, Box} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/About.css'
import dp from '../images/dp.jpg'




export const About=()=>{

    const[padding,setpadding]=useState("")
    
    const theme=useTheme()
    const small=useMediaQuery(theme.breakpoints.down("sm"))
    const medium=useMediaQuery(theme.breakpoints.only("sm"))
    const large=useMediaQuery(theme.breakpoints.up("md"))
    useEffect(()=>{
        if(small)
        setpadding("30px")
        else if(medium)
        setpadding("50px")
        else if(large)
        setpadding("60px")
    },[small,medium,large])


    return(
            <div id="About">
                <Grid sx={{ py:padding
            }} container  >
                <Grid className="about-grid" item xs={12} sm={12} md={6} lg={6} >
                   <Box className="about-first-grid"  component={"div"} sx={{height:'400px', maxWidth:"600px",marginLeft:"auto"}}>
                       <Container >
                            <img className="dp" src={dp} alt="" />
                       </Container>
                   </Box>
                </Grid>
                <Grid  className="about-grid" item xs={12} sm={12} md={6} lg={6}  >
                <Box className="about-second-grid"component={"div"} sx={{height:'400px', maxWidth:"600px",marginRight:"auto"}}>
                    <div>
                    <p className="about-heading">Hi, I’m Kiran. Nice to meet you.</p>
                    <p className="about-paragraph">
                    I have always been a someone who is curious about how modern applications work and how they make our day to day activities much easier. The fast moving technology has brought two very distant points in the planet very close together. As an aspiring software developer I wish to engage in this transition actively by contributing to the technical society in their newer and more advanced ventures.I am highly skilled in 
                    React.js, Node.js, Express.js, MongoDB, javascript, HTML and CSS.
                    </p>  
                    </div>
                    
                </Box>
                <button className="resume" ><a href="https://drive.google.com/file/d/1Ei2SVdsfoEexM40Oy5Bxb_8ddmift7_Y/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a></button>
                </Grid>
            </Grid>
            </div>
    )
}