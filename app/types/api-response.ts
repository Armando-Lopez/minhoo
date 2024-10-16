export type ApiResponseHeader = {
  header: {
    success: boolean;
    authenticated: boolean;
    messages: string[];
  };
};