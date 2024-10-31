import React, { useState } from "react";
import { Input } from "@/components/shared/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Textarea } from "@/components/shared/ui/textarea";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import { Button } from "@/components/shared/ui/button";
import AppIcon from "@/components/shared/AppIcon";
import { addPost } from "../news/services/add-post-services";

export const AddPost = ({ categoryId }: { categoryId: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState("");
  const [imagePost, setImagePost] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0];
      setImagePost(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageLoaded(true);
      const preview = document.getElementById("preview") as HTMLImageElement;
      if (preview) {
        preview.src = url;
      }
      const deleteButton = document.getElementById("delete-button");
      if (deleteButton) {
        deleteButton.style.display = "grid";
        setImagePost(null)
      }
      console.log(file);
    }
  };

  const handlePost = () => {
    addPost({
      post,
      categoryId,
      imagePost,
    });
    console.log(handlePost, post, imagePost);
  };

  const handleDelete = () => {
    const preview = document.getElementById("preview") as HTMLImageElement;
    if (preview) {
      preview.src = "";
    }
    const input = document.getElementById("picture") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
    const deleteButton = document.getElementById("delete-button");
    if (deleteButton) {
      deleteButton.style.display = "none";
      setImageLoaded(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="py-2.5 rounded-xl flex items-center justify-center gap-2 w-48 bg-primary-1 text-black-1 font-bold">
          <AppIcon icon="plus" width="20" height="20" />
          <p>Create</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black-1 border-radius-20 text-gray-150 p-0 w-3/5">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium px-6 border-b border-b-gray-150 py-3">
            New publication
          </DialogTitle>
          <DialogDescription
            asChild
            className="px-6 pt-3 pb-5 text-gray-150 bg-black-1"
          >
            <div>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={imageUrl}></AvatarImage>
                </Avatar>
                <Textarea
                  value={post}
                  placeholder="What do you want to show us?"
                  className="bg-black-1 border-none ring-transparent focus:ring-transparent focus:border-none"
                  onChange={(e) => setPost(e.target.value)}
                  />
              </div>
              <div className="grid w-full items-center overflow-hidden gap-5 mt-5 relative">
                {imageLoaded && (
                  <img
                    id="preview"
                    src={imageUrl}
                    alt="Preview"
                    width="200px"
                  />
                )}
                <Input
                  type="file"
                  id="picture"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex justify-between">
                  <Button
                    onClick={() => document.getElementById("picture")?.click()}
                    className="bg-transparent text-white w-fit hover:bg-transparent"
                  >
                    <AppIcon
                      icon="picture"
                      width="20"
                      height="20"
                      className="text-primary-1"
                    />
                    <p className="pl-2">Image</p>
                  </Button>
                  <Button
                    className="bg-transparent rounded-full text-white opacity-40"
                    onClick={handlePost}
                  >
                    Publish
                  </Button>
                </div>
                <div
                  id="delete-button"
                  onClick={handleDelete}
                  className="hidden absolute -top-6 -right-6 w-16 h-16 bg-black-1 rounded-full items-end p-2.5 cursor-pointer"
                >
                  <AppIcon icon="close" width="28" className="" />
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
