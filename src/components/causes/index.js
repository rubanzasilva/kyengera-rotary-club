import React from 'react';
import {GridContainer, GridItem, GridWrapper} from './causesElements'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Causes({title,cardContentTitle,cardContentTitleA, cardContentTitleB , cardContentTitleC, cardContentBody,cardContentBodyA,cardContentBodyB,cardContentBodyC, cardActionsText, cardActionsTextA, cardActionsTextB,cardActionsTextC,cardActionsTextD, cardActionsTextX, alt, img, imgA, imgB,imgC, altA, altB,altC}) {
  return (
    <GridContainer>

      <Typography variant='h4' gutterBottom textAlign='center' marginTop='7%' marginBottom='4%' >  {title}</Typography>

      <GridWrapper>


      <GridItem id='gridItemOne'>

      {/* individual card component */}
      <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        alt={alt}
        height="140"
        image={img}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContentTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContentBody}

        </Typography>
      </CardContent>

      <CardActions>
        <Button  href='https://antelopeclassifier.rubanzasilver.xyz/' target='_blank' size="small">{cardActionsText}</Button>
      </CardActions>
    </Card>
      </GridItem>


      <GridItem id='gridItemTwo'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={altB}
        height="140"
        image={imgB}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContentTitleB}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContentBodyB}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://www.zicofe.com/' size="small">
        {/* <a href='https://www.zicofe.com/'>{cardActionsTextB}</a> */}
          {cardActionsTextB}
          </Button>
      </CardActions>
    </Card>
      </GridItem>


      <GridItem id='gridItemThree'>

<Card sx={{ maxWidth: 345 }}>

<CardMedia
  component="img"
  alt={altC}
  height="140"
  image={imgC}
/>

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {cardContentTitleC}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {cardContentBodyC}

  </Typography>
</CardContent>

<CardActions>
  <Button  href='https://www.suwik.xyz/' target='_blank' size="small">{cardActionsTextC}</Button>
</CardActions>
</Card>
</GridItem>



    </GridWrapper>
    
    </GridContainer>
  );
}

