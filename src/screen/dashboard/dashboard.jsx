import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import "./dashboard.css";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../helper/storage";

const Dashboard = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = window.localStorage.getItem("@userData");
    // console.log("hhhhhhhhhhh",userData);
    if (userData) {
      const parsedData = JSON.parse(userData);
      setname(parsedData.name);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = async () => {
    localStorage.removeItem("@userData");
    localStorage.removeItem("@userToken");

    setname("");
    navigate("/");
  };

  const Dashboardpage = () => {
    navigate("/dashboard");
  };

  const orderpage = () => {
    navigate("/courseslist");
  };

  const paymentpagee = () => {
    navigate("/paymentsdetail");
  };

  const resultpage = () => {
    navigate("/testesult");
  };

  const onlineclass = () => {
    navigate("/onlineclass");
  };

  return (
    <Container fluid className="dashboard-container">
      <Row className="mt-5">
        <Col md={3} className="sidebar mt-2 ms-5">
          <div className="profile-section text-center">
            <div className="profile-picturees">
              <img
                src="https://teach.kavyasoftech.com/images/human.jpg"
                alt="Profile"
                className="rounded-circle mt-3"
              />
            </div>
            <h5 className="mt-3">{name ? name : "Guest"}</h5>
            <div className="social-icons mt-2">
              <Link to="https://www.facebook.com/">
                <i className="bi bi-facebook mx-2">
                  <FaFacebookSquare />
                </i>
              </Link>

              <Link to="https://in.linkedin.com/">
                <i className="bi bi-linkedin mx-2">
                  <FaLinkedin />
                </i>
              </Link>

              <Link to="https://x.com/?lang=en">
                <i className="bi bi-x-circle mx-2">
                  <FaSquareXTwitter />
                </i>
              </Link>
            </div>
          </div>

          <ListGroup className="mt-4 mb-3">
            <ListGroup.Item
              style={{ backgroundColor: "#8b82c3", color: "white" }}
              onClick={Dashboardpage}
            >
              Dashboard
            </ListGroup.Item>

            <Link className="nodashhhh">
              <ListGroup.Item onClick={onlineclass}>
                Online classes <Badge>0</Badge>
              </ListGroup.Item>
            </Link>

            <ListGroup.Item>Profile</ListGroup.Item>

            <ListGroup.Item>Change Password</ListGroup.Item>

            <Link className="nodashhhh">
              <ListGroup.Item onClick={resultpage}>
                Test Result Show
              </ListGroup.Item>
            </Link>

            <Link className="nodashhhh">
              <ListGroup.Item onClick={paymentpagee}>
                Payment Details
              </ListGroup.Item>
            </Link>

            <Link className="nodashhhh">
              <ListGroup.Item onClick={orderpage}>Orders</ListGroup.Item>
            </Link>

            <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={8} className="dashboard-content ms-3">
          <h4 className="dashboard-title text-center">Student Dashboard</h4>
          <hr />
          <Row>
            <Col md={4}>
              <Card.Title>Attempt Tests</Card.Title>
              <Card className="dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Number Of Order</Card.Title>
              <Card className="dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center"> 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card.Title>Total Payment</Card.Title>
              <Card className="dashboard-card">
                <Card.Body className="p-2">
                  <Card.Text className="text-center">₹ 0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
// import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom"; // Corrected imports
// import { Logout } from "../../helper/storage";

// const Dashboard = () => {
//   const [name, setname] = useState("");
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = window.localStorage.getItem("@userData");
//     if (userData) {
//       const parsedData = JSON.parse(userData);
//       setname(parsedData.name);
//     } else {
//       navigate("/"); // Ensure this is redirecting to login or home if no user data
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("@userData");
//     localStorage.removeItem("@userToken");
//     setname("");
//     navigate("/"); // Redirect to the login page after logout
//   };

//   const Dashboardpage = () => {
//     navigate("/dashboard"); // Correct path for dashboard navigation
//   };

//   const orderpage = () => {
//     navigate("/courseslist"); // Correct path for courses list
//   };

//   const paymentpage = () => {
//     navigate("/paymentsdetail"); // Correct path for payment details
//   };

//   const resultpage = () => {
//     navigate("/testresult"); // Correct path for test results
//   };

//   const onlineclass = () => {
//     navigate("/onlineclass"); // Correct path for online classes
//   };

//   return (
//     <Container fluid className="dashboard-container">
//       <Row className="mt-5">
//         <Col md={3} className="sidebar mt-2 ms-5">
//           <div className="profile-section text-center">
//             <div className="profile-picturees">
//               <img
//                 src="https://teach.kavyasoftech.com/images/human.jpg"
//                 alt="Profile"
//                 className="rounded-circle mt-3"
//               />
//             </div>
//             <h5 className="mt-3">{name ? name : "Guest"}</h5>
//             <div className="social-icons mt-2">
//               <Link to="https://www.facebook.com/">
//                 <FaFacebookSquare />
//               </Link>
//               <Link to="https://in.linkedin.com/">
//                 <FaLinkedin />
//               </Link>
//               <Link to="https://x.com/?lang=en">
//                 <FaSquareXTwitter />
//               </Link>
//             </div>
//           </div>

//           <ListGroup className="mt-4 mb-3">
//             <ListGroup.Item
//               style={{ backgroundColor: "#8b82c3", color: "white" }}
//               onClick={Dashboardpage}
//             >
//               Dashboard
//             </ListGroup.Item>

//             <ListGroup.Item onClick={onlineclass}>
//               Online classes <Badge>0</Badge>
//             </ListGroup.Item>

//             <ListGroup.Item>Profile</ListGroup.Item>
//             <ListGroup.Item>Change Password</ListGroup.Item>

//             <ListGroup.Item onClick={resultpage}>
//               Test Result Show
//             </ListGroup.Item>

//             <ListGroup.Item onClick={paymentpage}>
//               Payment Details
//             </ListGroup.Item>

//             <ListGroup.Item onClick={orderpage}>Orders</ListGroup.Item>

//             <ListGroup.Item onClick={handleLogout}>Logout</ListGroup.Item>
//           </ListGroup>
//         </Col>

//         <Col md={8} className="dashboard-content ms-3">
//           <h4 className="dashboard-title text-center">Student Dashboard</h4>
//           <hr />
//           <Row>
//             <Col md={4}>
//               <Card.Title>Attempt Tests</Card.Title>
//               <Card className="dashboard-card">
//                 <Card.Body className="p-2">
//                   <Card.Text className="text-center">0</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4}>
//               <Card.Title>Number Of Order</Card.Title>
//               <Card className="dashboard-card">
//                 <Card.Body className="p-2">
//                   <Card.Text className="text-center">0</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={4}>
//               <Card.Title>Total Payment</Card.Title>
//               <Card className="dashboard-card">
//                 <Card.Body className="p-2">
//                   <Card.Text className="text-center">₹ 0</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
