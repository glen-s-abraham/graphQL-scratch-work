import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { companies } from "../fake-data";
import { getCompanyById } from "../graphql/queries";

function CompanyDetail() {
  const [company, setCompany] = useState();
  const { companyId } = useParams();
  useEffect(() => {
    getCompanyById(companyId).then(setCompany);
  }, [companyId]);

  if (!company) {
    return `<p>Loading...<p/>`;
  }

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}

export default CompanyDetail;
