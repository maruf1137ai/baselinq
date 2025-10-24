import { AlertTriangle, CheckCircle2, CircleCheckBig } from "lucide-react";
import React from "react";

const Document = () => {
  return (
    <section className="bg-black-dark text-white-light relative">
      <div className=" container mx-auto px-4 py-20 lg:pb-32 relative z-10">
        <h2 className="text-[64px] leading-tight font-normal text-section-title text-center mb-6 text-white">
          Your Project Runs on Documents.
          {/* <br /> */}
          The Disconnect is Costing{" "}
          <span className="bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent">
            You Millions.
          </span>{" "}
        </h2>

        <p className="text-[22px] text-section-subtitle text-center mb-[100px]">
          Without contract-site connection, RFIs, revisions, and instructions
          become chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Current Reality Card */}
          <div className="bg-[#FAFAFA]/10 backdrop-blur-sm border-border py-9 px-8 text-white border border-[#AAAAAA] shadow-[12px_15px_0_0_rgba(255,255,255,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-white" />
              <h3 className="text-[18px] font-medium text-white">
                Current Reality
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="text-[16px] flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 text-white"></span>
                <span>Scattered documents across multiple systems</span>
              </li>
              <li className="text-[16px] flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 text-white"></span>
                <span>RFIs lost in email chains for weeks</span>
              </li>
              <li className="text-[16px] flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 text-white"></span>
                <span>Superseded drawings still in circulation</span>
              </li>
              <li className="text-[16px] flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 text-white"></span>
                <span>Contract clauses ignored during execution</span>
              </li>
              <li className="text-[16px] flex items-center gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 text-white"></span>
                <span>Disputes arise from missing documentation</span>
              </li>
            </ul>
          </div>

          {/* With Baselinq Card */}
          <div className="bg-[#FAFAFA]/10 backdrop-blur-sm border-border py-9 px-8 text-white border border-[#AAAAAA] shadow-[12px_15px_0_0_rgba(255,255,255,0.25)]">
            <div className="flex items-center gap-3 mb-6">
              <CircleCheckBig className="w-6 h-6 text-white" />
              <h3 className="text-[18px] font-medium text-white">
                With <span className="font-semibold">Baselinq</span>
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="text-[16px] flex items-start gap-3 text-white">
                <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <span>All documents intelligently connected to contracts</span>
              </li>
              <li className="text-[16px] flex items-start gap-3 text-white">
                <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <span>RFIs auto-routed with relevant clause citations</span>
              </li>
              <li className="text-[16px] flex items-start gap-3 text-white">
                <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <span>Real-time version control with supersession alerts</span>
              </li>
              <li className="text-[16px] flex items-start gap-3 text-white">
                <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <span>AI-powered compliance verification</span>
              </li>
              <li className="text-[16px] flex items-start gap-3 text-white">
                <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <span>Complete audit trail for dispute prevention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="/images/shadow.png"
        alt=""
        className="absolute bottom-0 z-1 max-h-[143px] w-full left-1/2 -translate-x-1/2"
      />
    </section>
  );
};

export default Document;
