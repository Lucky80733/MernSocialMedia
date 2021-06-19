import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,TextField } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SendIcon from '@material-ui/icons/Send';
import CardHeader from '@material-ui/core/CardHeader';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { likePost, deletePost } from '../../../actions/posts';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 560,
    
  },
  media: {
    height: 160,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (post.selectedFile!== "") {
    
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {post.creator.charAt(0)}
            </Avatar>
          }
          action={
          <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" />
          </Button>
          }
          title={post.creator}
          subheader={post.createdAt}
        />
      <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title="Paella dish"
        /> 
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><FavoriteIcon fontSize="small" /> 
           { post.likeCount} </Button>
           <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <TextField
          variant="outlined"
          fullWidth
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Comment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
               <IconButton
                  aria-label="toggle password visibility"
                 
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
            </InputAdornment>
          ),
        }}
      />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  else if (post.selectedFile===""){
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
          <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" />
          </Button>
          }
          title={post.creator}
          subheader={moment(post.createdAt).fromNow()}
        />
      
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><FavoriteIcon fontSize="small" /> 
           { post.likeCount} </Button>
           <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  
};

export default Post;
