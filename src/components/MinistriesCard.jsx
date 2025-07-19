import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <span {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#7F00FF',
  fontWeight: 500,
  fontSize: 13,
  userSelect: 'none',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const cardStyles = [
  {
    background: 'linear-gradient(135deg, #f3e7ff 0%, #e3f0ff 100%)',
    border: '1.5px solid #d1b3ff',
  },
  {
    background: 'linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)',
    border: '1.5px solid #b3d1ff',
  },
  {
    background: 'linear-gradient(135deg, #fffbe7 0%, #e7fff3 100%)',
    border: '1.5px solid #ffe7b3',
  },
  {
    background: 'linear-gradient(135deg, #e7fff3 0%, #fffbe7 100%)',
    border: '1.5px solid #b3ffe7',
  },
];

export default function MinistriesCard({ title, subheader, image, description, details, idx }) {
  const [expanded, setExpanded] = React.useState(false);
  const style = cardStyles[idx % cardStyles.length];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, mb: 2, borderRadius: 3, ...style, boxShadow: '0 2px 12px 0 rgba(90, 100, 120, 0.07)' }}>
      <CardHeader
        title={<Typography sx={{ fontSize: 17, fontWeight: 600, color: '#333' }}>{title}</Typography>}
        subheader={<Typography sx={{ fontSize: 13, color: 'text.secondary', fontWeight: 400 }}>{subheader}</Typography>}
        sx={{ pb: 0.5 }}
      />
      {image && (
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
          sx={{ borderRadius: 2, mx: 2, my: 1 }}
        />
      )}
      <CardContent sx={{ pt: 1, pb: 1 }}>
        <Typography variant="body2" sx={{ color: '#444', fontSize: 13, mb: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
      {details && (
        <CardActions disableSpacing sx={{ pt: 0, pb: 1, px: 2 }}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <span style={{ marginRight: 4 }}>More</span>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      )}
      {details && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: 0 }}>
            <Typography paragraph sx={{ fontSize: 13 }}>{details}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
