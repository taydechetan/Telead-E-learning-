import React, { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import toast from "react-hot-toast";
import ApiEndPoints from "../../networkcall/apiendpoint";
import "./studentprofile.css";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [packagedata, setpackagedata] = useState([]);
  const [userDataa, setUserData] = useState("");
  const navigate = useNavigate();

  console.log("gfgfgfgg", packagedata);
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const userData = JSON.parse(localStorage.getItem("@userData"));
  console.log("hfhfhfh", userData);

  useEffect(() => {
    handleSubmit();

    const storedUserData = localStorage.getItem("@userData");

    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData); // Set the user data in state
    }
  }, []);

  const handleSubmit = async () => {
    if (!validate()) return;
    const payload = {
      name: profileInfo.name,
      email: profileInfo.email,
      mobile: profileInfo.mobile,
      address: profileInfo.address,
      city: profileInfo.city,
    };

    try {
      const res = await fetch(
        "post",
        {},
        ApiEndPoints.StudentProfile + userData.Student.id
      );

      console.log("object", res);
      if (res.status === 200) {
        const userProfile = res.data;
        setProfileInfo({
          name: userProfile.name || "",
          email: userProfile.email || "",
          mobile: userProfile.mobile || "",
          address: userProfile.address || "",
          city: userProfile.city || "",
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!profileInfo.name) {
      tempErrors.name = "Name is required.";
    }

    if (!profileInfo.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(profileInfo.email)) {
      tempErrors.email = "Email is not valid.";
    }

    if (!profileInfo.mobile) {
      tempErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(profileInfo.mobile)) {
      tempErrors.mobile = "Mobile number should be 10 digits.";
    }

    if (!profileInfo.address) {
      tempErrors.address = "Address is required.";
    }

    if (!profileInfo.city) {
      tempErrors.city = "City is required.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handelnavigation = () => {
    navigate("/Changepassword");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("Updated Profile:", profileInfo);

  //     toast.success("Profile updated successfully!");
  //   } else {
  //     console.log("Validation failed");

  //     toast.error("Please fill out all required fields correctly.");
  //   }
  // };

  return (
    <div className="personalinformation mt-5">
      <div className="container-fluid">
        <h3 className="heading-personal">Home/Profile</h3>
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 col-md-4">
          {" "}
          <div className="sidebar-container">
            <div className="account-section m-1 d-flex ms-4">
              <span
                className="account-icon text-primary"
                style={{ padding: "4px 10px", fontSize: "16px" }}
              >
                <IoPerson style={{ color: "#782a8c" }} />
              </span>
              <h3 className="text-secondary ">My Account</h3>
            </div>
            <ul className="menu-list">
              <li
                className="menu-item active d-flex"
                style={{
                  padding: "10px 12px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Personal Information
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </li>

              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <li
                  className="menu-item d-flex"
                  style={{
                    padding: "10px 12px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Package List
                  <span className="arrow">
                    <MdArrowForwardIos />
                  </span>
                </li>
              </Link>

              <li
                className="menu-item d-flex"
                onClick={handelnavigation}
                style={{
                  padding: "10px 12px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Change Password
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 ">
          {" "}
          <div className="profile-form-container">
            <h2 className="text-center">Personal Information</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              {/* Name and Email in one line */}
              <div className="form-row row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={profileInfo.name}
                    onChange={handleInputChange}
                    placeholder={userDataa.name}
                    className={`form-control ${
                      errors.name ? "input-error" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="error-text">{errors.name}</span>
                  )}
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={profileInfo.email}
                    onChange={handleInputChange}
                    placeholder={userDataa.email}
                    className={`form-control ${
                      errors.email ? "input-error" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row row mt-3">
                <div className="col-md-6">
                  <input
                    type="number"
                    name="mobile"
                    value={profileInfo.mobile}
                    onChange={handleInputChange}
                    placeholder={userDataa.mobile}
                    className={`form-control ${
                      errors.mobile ? "input-error" : ""
                    }`}
                  />
                  {errors.mobile && (
                    <span className="error-text">{errors.mobile}</span>
                  )}
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="address"
                    value={profileInfo.address}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`form-control ${
                      errors.address ? "input-error" : ""
                    }`}
                  />
                  {errors.address && (
                    <span className="error-text">{errors.address}</span>
                  )}
                </div>
              </div>

              <div className="form-row row mt-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="city"
                    value={profileInfo.city}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`form-control ${
                      errors.city ? "input-error" : ""
                    }`}
                  />
                  {errors.city && (
                    <span className="error-text">{errors.city}</span>
                  )}
                </div>
              </div>

              <button type="submit" className="update-button mb-5 mt-4">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>

      {packagedata?.data?.map((item) => {
        return <h1>{item.id}</h1>;
      })}
    </div>
  );
};

export default StudentProfile;
