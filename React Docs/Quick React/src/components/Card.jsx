
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"


const Card = ({data, refer}) => {
    return(
        <motion.div drag dragConstraints={refer} whileDrag={{scale: 1.2}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden">
            <FaRegFileAlt />
           <p className="text-sm mt-5 font-medium font-sans">{data.desc}</p>
        <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex items-center justify-between px-5 mb-5">
            <h5>{data.filesize}</h5>

            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <HiOutlineDownload />}
            
            </span>
        </div>
        {data.tag.isOpen && ( 
            <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h5>{data.tag.tagtittle}</h5>
        </div>) }
       

        </div>       
        </motion.div>
        
    )
    
}

export default Card;