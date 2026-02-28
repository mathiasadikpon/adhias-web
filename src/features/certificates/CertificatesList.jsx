import React from "react";
import { Row, Col } from "reactstrap";
import CertificateCard from "./CertificateCard";

const certifications = [
  {
    title: "CompTIA A+ (CE)",
    issuer: "CompTIA",
    date: "Issued Jan 22, 2026 – Valid through Jan 22, 2029",
    image: "comptia.png",
    link: "https://www.credly.com/badges/ba222932-09dc-425b-b7c4-5c774b119d9d/linked_in_profile",
    details:
      "Certification ID: COMP001022964037 | Exams: 220-1201 (Core 1) & 220-1202 (Core 2)",
  },
  {
    title: "Full Stack Web & Mobile Development Certificate",
    issuer: "Nucamp",
    date: "Completed May 24, 2025",
    image: "nucamp.png",
  },
  {
    title: "Front End Web & Mobile Development Certificate",
    issuer: "Nucamp",
    date: "Completed April 22, 2025",
    image: "nucamp.png",
  },
  {
    title: "Back End, SQL & DevOps with Python Certificate",
    issuer: "Nucamp",
    date: "Completed October 6, 2025",
    image: "nucamp.png",
  },
];

const training = [
  {
    title: "Information Technology Support Program",
    issuer: "Per Scholas – Bronx, NY",
    date: "Oct 2025 – Jan 2026",
    image: "perscholas.png",
    details:
      "357 hours of hands-on training in hardware, OS, networking & IT support. Advanced troubleshooting & system configuration.",
  },
  {
    title: "Data Structures & Algorithms with Python",
    issuer: "Nucamp",
    date: "Professional Development",
    image: "nucamp.png",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    date: "via Per Scholas",
    image: "cisco.png",
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "via Per Scholas",
    image: "cisco.png",
  },
];

const CertificatesList = () => {
  return (
    <>
      <h3 className="text-center mb-4">Certifications</h3>
      <Row className="justify-content-center g-4 mb-5">
        {certifications.map((cert, index) => (
          <Col
            key={index}
            xs="12"
            sm="6"
            md="4"
            lg="3"
            className="d-flex justify-content-center"
          >
            <CertificateCard certificate={cert} />
          </Col>
        ))}
      </Row>

      <h3 className="text-center mb-4">Training & Professional Development</h3>
      <Row className="justify-content-center g-4">
        {training.map((cert, index) => (
          <Col
            key={index}
            xs="12"
            sm="6"
            md="4"
            lg="3"
            className="d-flex justify-content-center"
          >
            <CertificateCard certificate={cert} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CertificatesList;
