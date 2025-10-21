import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { TbLogout2 } from "react-icons/tb";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const {
    displayName,
    email,
    emailVerified,
    photoURL,
    // metadata,
    // lastSignInTimelastSignInTime,
  } = user;

  return (
    <section className="min-h-screen bg-base-200 py-12 px-4 flex justify-center items-center">
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden">
        {/* Top Cover / Banner */}
        <div className="h-40 bg-gradient-to-r from-primary to-secondary bg-[url('https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')] bg-cover bg-center relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg object-cover"
              />
            ) : (
              <img
                className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg object-cover"
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt=""
              />
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h2 className="text-3xl font-bold text-primary">{displayName}</h2>
          <p className="text-base-content/70 mt-1">{email}</p>
          <p className="text-base-content/70 mt-1">
            email verification: {emailVerified ? "Verified" : "UnVerified"}
          </p>
          <div className="mt-2">
            <button className="btn btn-primary text-white hover:bg-secondary hover:text-neutral gap-2">
              <TbLogout2 />
              Logout
            </button>
          </div>

          {/* Edit Profile Button */}
          {/* <div className="mt-8">
            <button className="btn btn-primary text-white hover:bg-secondary hover:text-neutral gap-2">
              <FaEdit />
              Edit Profile
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
