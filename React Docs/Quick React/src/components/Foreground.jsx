
import { useRef } from "react";
import Card from "./Card";


const Foreground = () => {

     const ref = useRef();

     const data = [
          {
               desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci commodi.",
               filesize: ".9mb",
               close: false,
               tag: {isOpen: true, tagtittle: "Download Now", tagColor: "green"},
          },
          {
               desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci commodi.",
               filesize: ".9mb",
               close: false,
               tag: {isOpen: true, tagtittle: "Download Now", tagColor: "green"},
          },
          {
               desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci commodi.",
               filesize: ".4mb",
               close: false,
               tag: {isOpen: true, tagtittle: "Download Now", tagColor: "blue"},
          },
          {
               desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci commodi.",
               filesize: ".4mb",
               close: false,
               tag: {isOpen: true, tagtittle: "Download Now", tagColor: "blue"},
          },
          {
               desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci commodi.",
               filesize: ".5mb",
               close: true,
               tag: {isOpen: false, tagtittle: "Download Now", tagColor: "green"},
          }
     ]
    
     return(
        <div ref={ref} className = 'w-full top-0 left-0 h-screen fixed z-[3] p-5 flex gap-10 flex-wrap'>
         {data.map((item)=>(

          <Card data={item} refer={ref}/>
         ))}
   </div>

     )
}

export default Foreground;