import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import CommentsList from 'modules/Discussion/CommentsList';
import React from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {onGetCommentsList} from 'redux/actions';
import TopHeading from '../TopHeading';
import {BiDownArrow} from 'react-icons/bi';

export default function CommentsApprove() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetCommentsList());
  }, []);
  const CommentFullList = useSelector((state) => state?.Comments?.CommentList);
  console.log('Full Comment List', CommentFullList);
  return (
    <Container container display='flex' sx={{width: '100%'}}>
      <TopHeading title='Comments Moderation' />

      <Typography variant='h1' sx={{p: 2}}>
        Moderate the comments and Approve to display on website
      </Typography>
      {CommentFullList &&
        CommentFullList.map((item, i) => (
          <Accordion sx={{my: 5, border: '1px solid green'}} key={i}>
            <AccordionSummary
              expandIcon={<BiDownArrow />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              WebLink:
              <Typography
                variant='h4'
                sx={{width: '75%', flexShrink: 0, p: 2, color: 'blue'}}
              >
                {item.PageAsPath}
              </Typography>
              <Typography variant='h4' sx={{p: 2}}>
                {
                  item?.Comments.filter(
                    (e2) => e2.Status === 'SentForModeration',
                  ).length
                }
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CommentsList
                comments={item.Comments}
                PageAsPath={item.PageAsPath}
              />
            </AccordionDetails>
          </Accordion>
        ))}
    </Container>
  );
}
