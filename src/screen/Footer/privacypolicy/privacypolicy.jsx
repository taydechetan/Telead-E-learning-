import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ApiEndPoints from "../../../networkcall/apiendpoint";

function Privacypolicy() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiEndPoints.Privacypolicy);
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

    fetchData();
  }, []);

  return (
    <Container className="py-4" style={{ marginTop: "76px" }}>
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

export default Privacypolicy;
