import { create } from "zustand";

interface SignUp {
  step: number;
  form: {
    email: string;
    name: string;
    code: string;
  };
  // eslint-disable-next-line no-unused-vars
  setForm: (form: SignUp["form"]) => void;
  // eslint-disable-next-line no-unused-vars
  setStep: (step: SignUp["step"]) => void;
} 

export const useSignUpStore = create<SignUp>((set) => ({
  step: 1,
  form: {
    email: "",
    name: "",
    code: "",
  },
  setForm: (form) => set({ form }),
  setStep: (step) => set({ step }),
}));
