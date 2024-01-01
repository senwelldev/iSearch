import React, { useState } from "react";
import "./Onboarding.css";
import ApexCharts from "react-apexcharts";

const Onboarding = () => {

    const [percent, setPercent] = useState(20);

    const getColor = () => {
        if (percent <= 20) {
          return "#36A2EB"; // Blue
        } 
        else if (percent > 20 && percent <= 40) {
            return "rgb(28, 175, 170)"; // Yellow
          }
        else if (percent > 40 && percent <= 60) {
          return "rgb(28, 175, 146)"; // Yellow
        }
        else if (percent > 60 && percent <= 80) {
          return "rgb(28, 175, 126)"; // Yellow
        }
         else {
          return "rgb(2, 152, 2)"; // Green
        }
      };

      const options = {
        chart: {
          height: 500,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '80%',
            },
            dataLabels: {
              name: {
                show: false,
                color: '#fff',
              },
              value: {
                show: true,
                // color: getColor(),
                offsetY: 15,
                fontSize: '50px',
              },
            },
          },
        },
        fill: {
          type: 'solid',
          colors: [getColor()],
        },
        labels: [''],
      };
        
      const series = [percent];

  return (
    <div className="onboardingBody">
      <div className="pieChartBody">
      <ApexCharts options={options} series={series} type="radialBar" height={350} />
      </div>
      <div className="accordion accordion-flush accordionBody" id="accordionFlushExample">
        <h1>
          <b>
            Onboarding Process
          </b>
        </h1>
        <br/>
        <div className="accordion-item">
          <h2 className="accordion-header" onClick={()=> setPercent(20)}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <b>Initial Consultation and proposal</b>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Gather essential information about their products or services, competitors, and unique selling propositions. Then we will develop a detailed proposal outlining the recommended digital marketing strategies, channels, and deliverables.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={()=> setPercent(40)}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <b>
                Strategy Briefing according to needs
              </b>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Provide insights into the rationale behind each strategy, how it aligns with their goals, and the expected outcomes. We ensure alignment with the client's brand guidelines and messaging preferences.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={()=> setPercent(60)}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
             <b> Optimization and Scaling</b>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Continuously monitor campaign performance and optimize strategies based on data insights. Encouraging an open line of communication to address questions or concerns promptly.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={()=> setPercent(80)}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
             <b>
             Review and Future Planning
             </b>
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Conduct periodic reviews to assess the success of implemented strategies. Collaborate on future planning, identifying opportunities for growth and improvement.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" onClick={()=> setPercent(100)}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
             <b>
             Feedback and Adaptation
             </b>
            </button>
          </h2>
          <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            Encourage client feedback and be responsive to their input. Adapting to different strategies based on feedback and changing business needs.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Onboarding;
