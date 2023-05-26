import SetSideBar from "@/components/setSideBar";
import React, { useState } from "react";
// import Switch from "@mui/base/Switch";
import Switch from "react-switch";

const Privacy = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-12 ">
        <SetSideBar />
        <div className="w-1/2 mb-10  mt-14">
          <p className="text-[#113b5e] font-bold text-4xl">Privacy</p>
          <p className="text-gray-600 text-lg pt-6 font-medium">
            Set your preferences for certain data use and soft credit pulls
            related to the below service and marketing scenarios. Note that
            preferences selected on this page only apply to the products related
            to the account you are logged into. If you have another LendingClub
            account, you will also need to set your preferences within that
            account. Signing up for new products with LendingClub may
            automatically update your preferences.
          </p>

          <div className="flex flex-col mt-6 space-y-5">
            <div className="border rounded pt-6 pb-8 px-6 shadow-md">
              <p className="text-[#113b5e] font-semibold text-xl">
                CUSTOMIZED OFFERS
              </p>
              <div className="flex justify-between  space-x-10 items-baseline pt-4">
                <div className="text-cyan-900  text-lg font-semibold">
                  LendingClub continuously collects your credit bureau
                  information to tailor the products and services offered to
                  you. This generates a soft credit pull from time to time and
                  does not affect your credit score. Your selection will apply
                  only to the soft credit pull specific to this feature. Other
                  credit information may be collected and used to provide offers
                  to you.
                </div>
                <div>
                  <Switch
                    onChange={(nextChecked) => {
                      setChecked1(nextChecked);
                    }}
                    checked={checked1}
                    className="react-switch"
                  />
                </div>
              </div>
            </div>
            <div className="border rounded pt-6 pb-8 px-6 shadow-md">
              <p className="text-[#113b5e] font-semibold text-xl">
                AFFILIATED COMPANIES
              </p>
              <div className="flex justify-between  space-x-10 items-baseline pt-4">
                <div className="text-cyan-900  text-lg font-semibold">
                  Allow LendingClub to share information with companies related
                  to LendingClub by common ownership or control for them to
                  market to you, and about your credit worthiness for their
                  everyday business purposes.
                </div>
                <div>
                  <Switch
                    onChange={(next) => {
                      setChecked2(next);
                    }}
                    checked={checked2}
                    className="react-switch"
                  />
                </div>
              </div>
            </div>
            <div className="border rounded pt-6 pb-8 px-6 shadow-md">
              <p className="text-[#113b5e] font-semibold text-xl">
                NON-AFFILIATED COMPANIES
              </p>
              <div className="flex justify-between  space-x-10 items-baseline pt-4">
                <div className="text-cyan-900  text-lg font-semibold">
                  Allow LendingClub to share information about you for marketing
                  or joint marketing purposes with non-affiliated and other
                  financial companies, and to use certain data covered by
                  California privacy law for cross-contextual advertising.
                </div>
                <div>
                  <Switch
                    onChange={(next) => {
                      setChecked3(next);
                    }}
                    checked={checked3}
                    className="react-switch"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm font-normal pt-6 px-2 text-cyan-900">
            <span className="font-bold text-[#113b5e]">Prescreened Offers</span>
            &nbsp; Please note that changing the above preferences does not opt
            you out of "prescreened" offers. You can choose to stop receiving
            “prescreened” offers of credit from this and other companies by
            calling toll-free 1-888-567-8688.
          </p>
          <p className="text-sm font-normal pt-4 px-2 text-cyan-900">
            <span className="font-bold text-[#113b5e]">Transactional Data</span>
            &nbsp; We want you to know that certain data related to your
            LendingClub transactions and experiences must be shared in order to
            complete your transactions, and therefore, is not included in the
            options above.
          </p>
          <p className="text-sm font-normal pt-4 px-2 text-cyan-900">
            Please note it may take up to four weeks for changes to your
            preferences to be applied across all use cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
