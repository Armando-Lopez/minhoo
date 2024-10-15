export type ApiResponseHeader = {
  success: boolean;
  authenticated: boolean;
  messages: string[];
};

export type ServiceApiResponse = {
  error: unknown;
  data: ApiResponseHeader | null;
};
