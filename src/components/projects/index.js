import React from 'react';
// import { Card } from 'antd';
import {GridContainer, GridItem, GridWrapper} from './projectElements'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { styled } from '@mui/material';


// const MyTitle = styled('Typography')({
//   variant: 'h1',
//   textAlign : 'center',


// });

export default function Projects({title,cardContentTitle,cardContentTitleA, cardContentTitleB , cardContentTitleC, cardContentBody,cardContentBodyA,cardContentBodyB,cardContentBodyC, cardActionsText, cardActionsTextA, cardActionsTextB,cardActionsTextC,cardActionsTextD, cardActionsTextX, alt, img, imgA, imgB,imgC, altA, altB,altC}) {
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
        <Button  href='https://huggingface.co/spaces/silvaKenpachi/antelopeClassifier?logs=build' target='_blank' size="small">{cardActionsTextX}</Button>
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
  <Button  href='https://github.com/rubanzasilva/suwikEcommerce' target='_blank' size="small">{cardActionsTextD}</Button>
</CardActions>
</Card>
</GridItem>


<GridItem id='gridItemFour'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={altA}
        height="200"
        image={imgA}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContentTitleA}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContentBodyA}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://github.com/rubanzasilva/my-website' size="small">{cardActionsTextA}</Button>
      </CardActions>
    </Card>
      </GridItem>


    </GridWrapper>
    
    </GridContainer>
  );
}


// const { Meta } = Card;

// const Projects: React.FC = () => (
//   <GridWrapper>

//     <GridItem>
//     <Card
//     hoverable
//     style={{ width: 400, padding :0, margin:0 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="ZICOFE is a member of International Women in Coffee Alliance. (IWCA Uganda Chapter), an orgarnization with the sole purpose of advocating for gender equality and women’s rights." />
//     <p>date</p>
//   </Card>
//     </GridItem>

//     <GridItem>
//     <Card
//     hoverable
//     style={{ width: 240, padding :0 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="Ugandan Coffee is a unique African coffee in the fact that it has a low acidity. This coffee is mild and smooth, with pleasant chocolate/tobacco/cedar notes, low to medium body. Exhibits flavor nuances of brown sugar and dried fruit, with a cocoa aroma." />
//   </Card>
//     </GridItem>
    
//   </GridWrapper>
// );

// export default Projects;