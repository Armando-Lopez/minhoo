import AppIcon from "@/components/shared/AppIcon";
import { Button } from "@/components/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  signUpService,
  signUpSchema,
  signUpFormData,
} from "@modules/signup/services/sign-up-service";
import { useSignUpStore } from "../store";

export const SignUpFormUploadInformation = () => {
  const signUpForm = useSignUpStore((state) => state.form);

  const [file, setFile] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: signUpForm.email,
      password: "",
      confirmPassword: "",
    },
  });

  const photoPreview = file ? URL.createObjectURL(file) : null;
  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0] || null);
  }

  async function onSubmit(data: signUpFormData) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("last_name", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirm_password", data.confirmPassword);
    formData.append("image_profile", file as File);

    const { data: response, error } = await signUpService(formData);

    console.log(response, error);
    
  }

  return (
    <div className="flex flex-col items-center pt-6">
      <div className="relative w-40 aspect-square rounded-full border-dashed border-2 border-gray-2">
        {file ? (
          <img
            src={photoPreview || ""}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <label
            htmlFor="upload-image"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-2 cursor-pointer"
          >
            <AppIcon icon="user" className="text-4xl text-center mx-auto" />
            <span className="text-sm">Add profile picture</span>
            <input
              id="upload-image"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>
      <Form {...form}>
        <form
          className="space-y-4 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full block">Next</Button>
        </form>
      </Form>
    </div>
  );
};
