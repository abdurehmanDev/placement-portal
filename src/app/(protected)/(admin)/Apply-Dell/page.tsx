"use client"
import Footer from "src/app/components/Base/Footer";
import NavBar from "src/app/components/Base/NavBar";
import withAuth from "src/app/middleware/withAuth";
import JobApplyForm from "src/app/components/common/JobApplyForm";
import JoinOurTeam from "src/app/components/common/JobApplyForm";

function Dell() {
  return (
    <>
    <NavBar/>
      <JobApplyForm   title="BE Developer" formType="Dell"/>
      <Footer />
    </>
  );
}

export default withAuth(Dell);