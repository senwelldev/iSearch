import React, { useEffect } from "react";
import "./Scrollspy.css";

const Scrollspy = () => {
  // useEffect(() => {
  //     const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
  //       target: "#list-example",
  //     });
  //     scrollSpy.refresh(); // Refresh the ScrollSpy after initialization
  //   }, []); // Empty dependency array ensures the effect runs once when the component mounts
  useEffect(() => {
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: "#list-example",
    });

    const handleScroll = () => {
      scrollSpy.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-offset="0"
      class=" scrollspy-parent"
    >
      <div class="container text-white container-Scroll">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-4">
                <div id="list-example" class="list-group">
                  <a
                    class="list-group-item list-group-item-action border-0"
                    href="#list-item-1"
                  >
                    Strategy
                  </a>
                  <a
                    class="list-group-item list-group-item-action border-0"
                    href="#list-item-2"
                  >
                    Brand Makeover
                  </a>
                  <a
                    class="list-group-item list-group-item-action border-0"
                    href="#list-item-3"
                  >
                    Innovation
                  </a>
                  <a
                    class="list-group-item list-group-item-action border-0"
                    href="#list-item-4"
                  >
                    Success
                  </a>
                </div>
              </div>
              <div class="col-8">
                <div class="scrollspy-example" id="scrollspy-content">
                  <div  id="list-item-1">
                    <h4>
                      Unleash Your Brand's Potential with Our Strategic Magic!
                    </h4>
                    <p>
                      Discover a new era of marketing brilliance! Our team of
                      experts specializes in crafting campaigns that captivate,
                      convert, and catapult your brand to success. Let's embark on
                      a journey to redefine your brand story and amplify your
                      market presence.
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br/>
                  <br/>
                  <br/>
                  <div id="list-item-2">
                    <h4>
                      Ignite Your Sales: The Ultimate Marketing Makeover!
                    </h4>
                    <p>
                      Revolutionize your marketing game with our dynamic
                      strategies. From cutting-edge digital campaigns to
                      irresistible content, we're here to fuel your brand's
                      growth. Elevate your sales, engage your audience, and leave
                      a lasting impression in the hearts of your customers.
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div id="list-item-3">
                    <h4 >
                      Marketing Marvels: Where Innovation Meets Impact!
                    </h4>
                    <p>
                      Step into a world of marketing marvels! Our creative prowess
                      and strategic acumen converge to sculpt compelling
                      narratives that resonate with your audience. Join us on the
                      journey to transform your brand into an industry
                      trailblazer.
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div id="list-item-4">
                    <h4 >
                      Your Success Story Starts Here: Unlock Marketing Mastery!
                    </h4>
                    <p>
                      Ready to script your success story? At iSearch, we're more
                      than marketers, we're storytellers crafting narratives that
                      drive results. Engage with us for a marketing experience
                      that turns your goals into triumphs and transforms your
                      brand into an unstoppable force.
                    </p>
                    <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollspy;
