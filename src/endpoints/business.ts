import axios from 'axios';
import { RegisterOwnerWithStorePayload } from 'types/business';

export const registerOwnerWithStore = (payload: RegisterOwnerWithStorePayload) =>
  axios.post('/api/v1/site/register_business', payload);
