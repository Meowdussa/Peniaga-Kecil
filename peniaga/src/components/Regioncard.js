import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Regioncard.css"

const Regioncard = () => {
    return (
        <div>
            <div className="region">
        <div className="kl">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea style={{backgroundColor: "aliceblue"}}>
          <CardMedia
            component="img"
            height="200"
            image="https://images.pexels.com/photos/22804/pexels-photo.jpg"
            alt="Kuala Lumpur"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: "black"}}>
            Kuala Lumpur
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </div>
        <div className="jitra">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea style={{backgroundColor: "aliceblue"}}>
          <CardMedia
            component="img"
            height="200"
            image="https://rileklah.com/sites/default/files/styles/large/public/images/2020/06/24/node-5560/KEDAH%202.jpg"
            alt="jitra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: "black"}}>
              Jitra
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              omnomnom
            </Typography> */}
          </CardContent>
        </CardActionArea>
        </Card>
        </div>
        <div className="bintulu">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea style={{backgroundColor: "aliceblue"}}>
          <CardMedia
            component="img"
            height="200"
            image="https://user-images.githubusercontent.com/86279819/133969975-d2856786-f370-45f6-9bce-e5e807149fcd.jpg"
            alt="Bintulu"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: "black"}}>
              Bintulu
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              omnomnom
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
      </div>
        </div>
    )
}

export default Regioncard;
