import React from 'react'
import './PremiumPlan.css'
import MainPagesHeader from '../../Common/MainPagesHeader/MainPagesHeader'

function PremiumPlans() {
  return (
    <>
      <div className="container-fluid home-layout-div">
        <MainPagesHeader />

        <div className="row home-contents">
          <div className="premium-head">
            <h1>PREMIUM PLANS</h1>
            <h5>Choose a plan that suits you well</h5>
          </div>
          <div className="premium-body">
            <div className="premium-plan-segment">
              <div className="segment-head">
                <h3>Starter Plan</h3>
                <div className="premium-rate">
                  <h2>79</h2>
                  <p>/</p>
                  <p>Week</p>
                </div>
              </div>
              <div className="segment-para">
                <h5>Features You Will Get In This Plan</h5>
              </div>
              <div className="segment-body">
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>Profile Customization</p>
                </div>
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                  <p>24/7 Support with Faster Responses</p>
                </div>
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                  <p>Unlimited Upload Size</p>
                </div>
              </div>
              <div className="segment-footer">
                <button className="btn btn-primary">Current plan</button>
              </div>
            </div>
            <div className="premium-plan-segment">
              <div className="segment-head">
                <h3>Lite Plan</h3>
                <div className="premium-rate">
                  <h2>299</h2>
                  <p>/</p>
                  <p>month</p>
                </div>
              </div>
              <div className="segment-para">
                <h5>Features You Will Get In This Plan</h5>
              </div>
              <div className="segment-body">
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>Profile Customization</p>
                </div>
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>24/7 Support with Faster Responses</p>
                </div>
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                  <p>Unlimited Upload Size</p>
                </div>
              </div>
              <div className="segment-footer">
                <button className="btn btn-primary">Upgrade plan</button>
              </div>
            </div>
            <div className="premium-plan-segment">
            <div className="segment-head">
                <h3>Pro Plan</h3>
                <div className="premium-rate">
                  <h2>2999</h2>
                  <p>/</p>
                  <p>year</p>
                </div>
              </div>
              <div className="segment-para">
                <h5>Features You Will Get In This Plan</h5>
              </div>
              <div className="segment-body">
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>Profile Customization</p>
                </div>
                <div className="segment-list">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>24/7 Support with Faster Responses</p>
                </div>
                <div className="segment-list">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                  <p>Unlimited Upload Size</p>
                </div>
              </div>
              <div className="segment-footer">
                <button className="btn btn-primary">Upgrade plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumPlans
