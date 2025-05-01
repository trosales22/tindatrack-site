import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import * as fns from 'endpoints/feedback';

export const useSubmitFeedbackMutation = (
  mutationOptions?: UseMutationOptions<AxiosResponse<any>, unknown, any>,
) => {
  return useMutation({
    mutationKey: ['SUBMIT_FEEDBACK'],
    mutationFn: (payload) => fns.submitFedback(payload),
    ...mutationOptions,
  });
};
