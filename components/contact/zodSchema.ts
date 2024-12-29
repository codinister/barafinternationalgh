

import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email({ message: 'Valid email required!' }),
  subject: z.string().min(2, { message: 'Subject field required!' }),
  message: z.string().min(2, {
    message: 'Message field required!',
  }),
});
