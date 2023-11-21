import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid,Typography} from '@mui/material';

const cardData = [
  {
    id: 1,
    title: 'PIZZA',
    description: 'The perfect and tastiest triangle now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://www.godubrovnik.com/wp-content/uploads/pizza.jpg',
  },
  {
    id: 2,
    title: 'PASTA',
    description: 'A fine taste of Italy right in your neighborhood through Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://jonoandjules.files.wordpress.com/2011/12/blue-cheese-pasta.jpg',
  },
  {
    id: 3,
    title: 'PAV BHAJI',
    description: 'The perfect slice of life now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2019/07/pav-bhaji.jpg',
  },
  {
    id: 4,
    title: 'INDIAN BREADS',
    description: ' ab uber eats mein maans mukt svaadisht bhaarateey bred ka aanand le ! Pick your restaurant to order now.',
    imageUrl: 'https://www.thespruceeats.com/thmb/VFInnE8x2bW4iIy45lHlZarJgRk=/4664x3109/filters:no_upscale():max_bytes(150000):strip_icc()/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9.jpg',
  },
  {
    id: 5,
    title: 'SOUTH INDIAN FOOD',
    description: 'To the people who miss veetu saapadu, from Uber eats! Pick your restaurant to order now.',
    imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/zbbkzuauoecvdu7nmmjw',
  },   
  {
    id: 6,
    title: 'BURGER',
    description: 'The Ultimate Pattie and Bun Treat from Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://img1.wsimg.com/isteam/ip/b2f31f52-b6cc-404a-afa3-05deb1183cce/burger%20pic.jpg',
  },   
  {
    id: 7,
    title: 'BRIYANI',
    description: 'The Biryani That Will Make You Want to Do a Happy Dance now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://i2.wp.com/www.relishthebite.com/wp-content/uploads/2015/02/EGgBiryani-3.jpg',
  },   
  {
    id: 8,
    title: 'SWEETS AND SNACKS',
    description: 'The perfect delights for the sweet and salt days now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://bitemeup.com/wp-content/uploads/2019/03/bg_1024x1024.jpg',
  },   
];
function MultiActionAreaCard({ title, description, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="100"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Order now
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

function CardGrid() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <MultiActionAreaCard
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;
