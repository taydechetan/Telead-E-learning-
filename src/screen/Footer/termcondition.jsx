import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ApiEndPoints from "../../networkcall/apiendpoint";

function Termscondition() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiEndPoints.Termconditon);
        // console.log("API Response:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("API Data:", data);

        const contentData = data?.result?.content || "No content available.";
        setContent(contentData);
      } catch (error) {
        console.error("Error fetching Terms and Conditions:", error);
        setContent("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
// Today implement Contact-us Api
// Then Implement Privacy-policy Api
// Then Implement Terms-condition Api
// working on  Privacy-Policy and Term-Condition Page Risponsive  design screen 
    fetchData();
  }, []);

  return (
    <Container className="py-4" style={{ marginTop: "95px" }}>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading Terms and Conditions...</p>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </Container>
  );
}

export default Termscondition;
