
import styles from "./Button.module.css"

const Button = ({text,icon,isOutline, ...rest}) => {

    return(
        
        <button  
        {...rest}
        className={isOutline ? styles.btn1 :styles.btn}>

            {icon}
            {text}
            
        </button>
    )
}

export default Button;