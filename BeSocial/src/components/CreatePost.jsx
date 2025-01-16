import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import {useNavigate} from "react-router-dom";

const Createpost = () => {

  const {addPost} = useContext(PostList)
  
  const navigate = useNavigate();

  const useridelement = useRef();
  const Titleelement = useRef();
  const Descriptionelement = useRef();
  const Reactionselement = useRef();
  const Hashtagsdelement = useRef();

  const HandleonClick = (event) => {
    event.preventDefault();
    if(userid.value != 0){
   const userid = useridelement.current.value;
   const usertitle = Titleelement.current.value;
   const userdesc = Descriptionelement.current.value;
   const userreaction = Reactionselement.current.value;
   const userhash = Hashtagsdelement.current.value.split(" ");

    useridelement.current.value = "";
    Titleelement.current.value = "";
    Descriptionelement.current.value = "";
    Reactionselement.current.value = "";
    Hashtagsdelement.current.value = "";

    navigate("/");
    // setselectedtab("Home")
    addPost(userid,usertitle,userdesc,userreaction,userhash);
    }
    else if(userid.value == 0 ){
      alert("Please enter userId")
    }  }
    return (
    <form className="createpost" onSubmit={HandleonClick}>
      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">Enter your user ID  </label>
        <input type="text" className="form-control" id="userid" ref={useridelement} aria-describedby="emailHelp"/>
        
      </div>
      <div className="mb-3">
        <label htmlFor="usertitle" className="form-label">Title</label>
        <input type="text" className="form-control" ref={Titleelement} id="usertitle"/>
      </div>
      <div className="mb-3 ">
      <label htmlFor="userdesc" className="form-label">Description</label>
      <textarea type="text" className="form-control" id="userdesc" ref={Descriptionelement} rows="2" />
      </div>
      <div className="mb-3">
        <label htmlFor="userreaction" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="userreaction" ref={Reactionselement} />
      </div>
      <div className="mb-3">
        <label htmlFor="userhash" className="form-label">Hashtags</label>
        <input type="text" className="form-control" id="userhash" ref={Hashtagsdelement} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    ) 
    }
    export default Createpost;

