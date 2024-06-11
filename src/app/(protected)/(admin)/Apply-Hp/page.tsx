"use client"
import Footer from "src/app/components/Base/Footer";
import NavBar from "src/app/components/Base/NavBar";
import withAuth from "src/app/middleware/withAuth";
import JobApplyForm from "src/app/components/common/JobApplyForm";
import JoinOurTeam from "src/app/components/common/JobApplyForm";

function Hp() {
  return (
    <>
    <NavBar/>
      <JobApplyForm  title="Data Scientist" formType="Hp"/>
      <Footer />
    </>
  );
}

export default withAuth(Hp);