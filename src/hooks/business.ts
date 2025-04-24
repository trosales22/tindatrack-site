import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import * as fns from 'endpoints/business';

export const useRegisterBusinessAdminMutation = (mutationOptions?: UseMutationOptions<AxiosResponse<any>, unknown, any>) => {
  return useMutation({
    mutationKey: ['REGISTER_BUSINESS_OWNER_WITH_STORE'],
    mutationFn: (payload) => fns.registerOwnerWithStore(payload),
    ...mutationOptions
  });
};