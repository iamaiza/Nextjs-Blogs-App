"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useSession } from "next-auth/react";
import { striphtML } from "@/utils/domParser";

const QuillEitor = dynamic(() => import("react-quill"), { ssr: false });
const storage = getStorage(app);

const CreatePostPage = () => {
  const { status } = useSession();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    file && upload();
  }, [file]);

  const upload = () => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setMedia(downloadURL);
        });
      }
    );
  };

  const showButtonsHandler = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  if (status === "loading") {
    return (
      <div className="mt-[50px] text-center font-bold text-2xl">Loading...</div>
    );
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\-s-]/g, "")
      .replace(/[\s_-]+/g, "")
      .replace(/^-+|-+$/g, "");
  };

  const description = striphtML(value);

  const postPublishHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug: slugify(title),
          desc: description,
          img: media,
          catSlug: category || "style",
        }),
      });

      if (res.ok) {
        console.log("Success!");
        const data = await res.json();
        console.log(data);
      } else {
        console.log(res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        className="bg-transparent mt-16 max-[450px]:px-0 p-[50px] text-2xl sm:text-[64px] w-full outline-none placeholder:text-[#b3b3b1]"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="max-w-[200px] w-9/12">
        <label className="block mb-2 text-xl">Category</label>
        <select className="w-full text-black p-1.5 outline-none" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="style">Style</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="culture">Culture</option>
          <option value="coding">Coding</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 max-[350px]:gap-24 h-[700px] relative mt-8">
        <button
          className="max-[350px]:w-10 max-[350px]:h-10 w-9 h-9 flex items-center p-3 justify-center rounded-full border border-[#ddd]"
          onClick={showButtonsHandler}
        >
          <Image src="/images/plus.png" alt="add" width={16} height={16} />
        </button>
        {show && (
          <div className="flex items-center gap-5 absolute z-10 left-28 max-[350px]:left-0 max-[350px]:mt-14">
            <input
              className="hidden"
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a8917]">
              <label htmlFor="image">
                <Image
                  src="/images/image.png"
                  alt="gallery"
                  width={16}
                  height={16}
                />
              </label>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a8917]">
              <Image
                src="/images/external.png"
                alt="browser img"
                width={16}
                height={16}
              />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a8917]">
              <Image
                src="/images/video.png"
                alt="video"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <QuillEitor
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>

      <button
        className="py-2.5 px-6 absolute top-[100px] right-5 rounded-3xl bg-[#1a8917] text-white"
        onClick={postPublishHandler}
      >
        Publish
      </button>
    </div>
  );
};

export default CreatePostPage;

