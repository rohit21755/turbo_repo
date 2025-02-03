"use client";
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};


// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home() {
  const [room, setRoom] = useState("")
  const router = useRouter()
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "black",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TextInput  placeholder="Room name"
       onChange={(e) => console.log(e.target.value)}
        />
      {/* <Button appName="Web">
        Join
      </Button> */}
      <button onClick={() => router.push('/chat/123')}>Join</button>
      </div>
      
    </div>
  );
}
