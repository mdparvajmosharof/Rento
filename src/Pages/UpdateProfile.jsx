import { useContext, useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { reload } from "firebase/auth";

const UpdateProfile = () => {

  useEffect(() => {
    document.title = 'Rento | Update Profile'; 
}, []);

  const { authInfo } = useContext(AuthContext);
  const { user, updateUserProfile } = authInfo;

  const handleUpdateProfile = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    console.log();
    updateUserProfile(name, img)
    .then(()=>{
      
      Swal.fire({
        title: 'Successful',
        text: 'Refresh to see the Update.',
        icon: 'success',
        confirmButtonText: 'OK, I will Refresh'
      })
    })
  }

  const handleUpdateProfileAuth = (name, img) => {
    
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-10 space-y-6 shadow-xl mx-10 p-10 rounded-xl">
        <div className="flex justify-center items-center px-5">
          <h1 className="text-3xl font-bold mx-auto ">Ubdate Profile</h1>
        </div>
        <form onSubmit={handleUpdateProfile} action="">
          <div>
            <h1 className="text-2xl font-bold pb-5">Profile</h1>
            <div className="flex  items-center gap-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="img"
                  placeholder={user.photoURL}
                //   value={user.photoURL}
                  className="input input-bordered w-full  "
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-5">Full Name</h1>

            <div>
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="input input-bordered w-full  "
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-5">Your Email</h1>

            <div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder={user.email}                  className="input input-bordered w-full  "
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            
            <input onClick={handleUpdateProfileAuth} className="btn btn-primary mt-10 px-20" type="submit" value="Update" />
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
