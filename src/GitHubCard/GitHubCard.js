import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GitHubCard() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await fetch("https://api.github.com/users/Elka1214");
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, []);

  return (
    <Card style={{ width: "30%", margin: "auto" }}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Subtitle>({user.name})</Card.Subtitle>
        <Card.Text>{user.bio}</Card.Text>
        <Button variant="primary" href={user.html_url}>
          Go to Profile
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
