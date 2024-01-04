import React from "react";
import "./CareerPage.css";
import JoinCard from "./JoinCard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import BookIcon from "@mui/icons-material/Book";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const JoinUsComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="left-part join-us d-flex align-items-center justify-content-center flex-column shapeFuture">
            <h1>Shape the Future</h1>
            <p>
              iSearch Invites You to Join a World of Design, Advertising, and
              Career Growth.- Unlock boundless opportunities and shape your
              future at iSearch, the epicenter of digital marketing, design, and
              advertising innovation. Join a team of visionaries and achievers
              where your career growth is our top priority. Our employee-centric
              culture fosters a vibrant and collaborative work environment,
              complemented by a competitive pay scale that recognizes your
              skills and contributions. Dive into the forefront of digital
              marketing excellence, design mastery, and advertising prowess,
              collaborating with super-talented peers who share your passion for
              pushing boundaries. At iSearch, we don't just offer jobs; we
              provide a platform to make a lasting impact and nurture your
              professional journey. Ready to redefine your career? Join iSearch
              and embark on a thrilling adventure of growth and innovation!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col">
            <JoinCard
              title={"150+"}
              descrption={"Team of Professionals"}
              //   icon={<ManageAccountsIcon fontSize="large"></ManageAccountsIcon>}
            />
          </div>
          <div className="col">
            <JoinCard
              title={"500+"}
              descrption={"Social Media Accounts handled"}
              //   icon={<DevicesOtherIcon fontSize="large"></DevicesOtherIcon>}
            ></JoinCard>
          </div>
          <div className="col">
            <JoinCard
              title={"200+"}
              descrption={"Web and Mobile applications built"}
              //   icon={<BookIcon fontSize="large"></BookIcon>}
            ></JoinCard>
          </div>
          <div className="col">
            <JoinCard
              title={"90%"}
              descrption={"Client retention"}
              //   icon={
              //     <SignalCellularAltIcon fontSize="large"></SignalCellularAltIcon>
              //   }
            ></JoinCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsComponent;
