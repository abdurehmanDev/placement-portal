"use client"
import Footer from "src/app/components/Base/Footer";
import NavBar from "src/app/components/Base/NavBar";
import withAuth from "src/app/middleware/withAuth";
import JobApplyForm from "src/app/components/common/JobApplyForm";
import JoinOurTeam from "src/app/components/common/JobApplyForm";

function Hcl() {
  return (
    <>
    <NavBar/>
      <JobApplyForm formType="Hcl"  title="AI/ML"/>
      <Footer />
    </>
  );
}

export default withAuth(Hcl);