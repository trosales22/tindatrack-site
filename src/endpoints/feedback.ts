import axios from 'axios';
import { SubmitFeedbackPayload } from 'types/feedback';

export const submitFedback = (payload: SubmitFeedbackPayload) =>
  axios.post('/api/v1/site/submit_feedback', payload);
