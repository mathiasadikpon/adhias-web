import React from "react";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import CertificatesList from "../features/certificates/CertificatesList";

const CertificatesPage = () => {
  return (
    <Container className="py-4">
      <SubHeader current="Certificates" />
      <CertificatesList />
    </Container>
  );
};

export default CertificatesPage;
