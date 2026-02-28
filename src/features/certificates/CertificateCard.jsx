import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const CertificateCard = ({ certificate }) => {
  const { title, issuer, date, image, link, details } = certificate;

  return (
    <Card className="m-2 certificate-card" style={{ width: "18rem" }}>
      {image && (
        <CardImg
          top
          // src={`/images/${image}`}
          src="/images/cert_temlate.png"
          alt={title}
          style={{ height: "140px", objectFit: "cover" }}
        />
      )}

      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>

        <CardText>
          <strong>Issuer:</strong> {issuer} <br />
          <strong>Date:</strong> {date}
        </CardText>

        {details && (
          <CardText style={{ fontSize: "0.9rem" }}>{details}</CardText>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary w-100"
          >
            Verify Credential
          </a>
        )}
      </CardBody>
    </Card>
  );
};

export default CertificateCard;
