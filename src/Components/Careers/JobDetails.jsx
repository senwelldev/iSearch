// JobDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import jobDescriptions from "../Careers/Jobs.json";
import "./JobDetails.css";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams();

  // Fetch job details based on the jobTitle and display them
  const jobDetails = jobDescriptions.jobs.find(
    (job) => job.jobId === parseInt(jobId, 10)
  );

  if (!jobDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="careerDetailsBody">
      <div className="Isearch-JobDesSection">
        <div className="container-fluid" >
          <div className="banner">
            <div className="Jobbanner-header">
              <h1>{jobDetails.jobTitle}</h1>
            </div>
          </div>

          <div class="max-w-1200 mx-auto">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-sm-12 pr-50 mb-5">
                <div className="is-Job-Description">
                  <p>
                    <strong>Job Description:</strong>
                  </p>

                  <p className="Isjob-description">
                    {jobDetails.jobDescription}
                  </p>
                  <br />
                  <p>
                    <strong>Responsibilities:</strong> <br /> <br />
                    <ul>
                      {jobDetails.responsibilities.clientSatisfaction && (
                        <li>
                          &rarr; &nbsp;{" "}
                          {jobDetails.responsibilities.clientSatisfaction}
                        </li>
                      )}
                      {jobDetails.responsibilities.audits && (
                        <li>
                          &rarr; &nbsp; {jobDetails.responsibilities.audits}
                        </li>
                      )}
                      {jobDetails.responsibilities.analytics && (
                        <li>
                          &rarr; &nbsp; {jobDetails.responsibilities.analytics}
                        </li>
                      )}

                      {jobDetails.responsibilities.seoStrategyExecution && (
                        <li>
                          &rarr; &nbsp;{" "}
                          {jobDetails.responsibilities.seoStrategyExecution}
                        </li>
                      )}

                      {jobDetails.responsibilities.buildingBacklinks && (
                        <li>
                          &rarr; &nbsp;{" "}
                          {jobDetails.responsibilities.buildingBacklinks}
                        </li>
                      )}

                      {jobDetails.responsibilities
                        .onPageOffPageOptimization && (
                        <li>
                          &rarr; &nbsp;{" "}
                          {
                            jobDetails.responsibilities
                              .onPageOffPageOptimization
                          }
                        </li>
                      )}

                      {jobDetails.responsibilities.siteTrafficManagement && (
                        <li>
                          &rarr; &nbsp;
                          {jobDetails.responsibilities.siteTrafficManagement}
                        </li>
                      )}

                      {jobDetails.responsibilities.bounceRateAndTimeSpent && (
                        <li>
                          &rarr; &nbsp;
                          {jobDetails.responsibilities.bounceRateAndTimeSpent}
                        </li>
                      )}

                      {jobDetails.responsibilities.seoContentCreation && (
                        <li>
                          &rarr; &nbsp;
                          {jobDetails.responsibilities.seoContentCreation}
                        </li>
                      )}
                    </ul>
                  </p>
                  <p>
                    <strong>Qualifications:</strong>
                  </p>
                  <ul>
                    {jobDetails.qualifications.experience && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience}
                      </li>
                    )}
                    {jobDetails.qualifications.experience1 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience1}
                      </li>
                    )}

                    {jobDetails.qualifications.experience2 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience2}
                      </li>
                    )}

                    {jobDetails.qualifications.experience3 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience3}
                      </li>
                    )}

                    {jobDetails.qualifications.experience4 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience4}
                      </li>
                    )}

                    {jobDetails.qualifications.experience5 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience5}
                      </li>
                    )}

                    {jobDetails.qualifications.experience6 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience6}
                      </li>
                    )}

                    {jobDetails.qualifications.experience7 && (
                      <li>
                        &rarr; &nbsp; {jobDetails.qualifications.experience7}
                      </li>
                    )}
                  </ul>
                  <br />
                  <p>
                    <strong>Skills</strong>
                  </p>
                  <ul>
                    {jobDetails.qualifications.skills[0].skill1 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill1}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill2 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill2}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill3 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill3}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill4 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill4}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill5 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill5}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill6 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill6}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill7 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill7}
                      </li>
                    )}

                    {jobDetails.qualifications.skills[0].skill8 && (
                      <li>
                        &rarr; &nbsp;{" "}
                        {jobDetails.qualifications.skills[0].skill8}
                      </li>
                    )}
                  </ul>

                  <p>
                    <strong>Team Related:</strong>
                  </p>
                  <ul>
                    <li>
                      &rarr; &nbsp;{" "}
                      {jobDetails.teamRelated.developingRelationships}
                    </li>
                  </ul>
                  <ul>
                    <li>&rarr; &nbsp; {jobDetails.teamRelated.teamBuilding}</li>
                  </ul>

                  <p>
                    <strong>OpenPositions:</strong>
                  </p>
                  <ul>
                    <li>
                      &rarr; &nbsp;{" "}
                      {jobDetails.additionalInformation.openPositions}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-12 isjobRight">
                <div class="ISsticky-job h-500">
                  <Link to="/jobapplication" className="isApply-button">
                    Apply for this Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
