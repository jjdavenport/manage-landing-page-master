import Li from "./li";

const Ul = () => {
  return (
    <>
      <ul className="flex flex-col gap-10 pl-4">
        <Li
          title="Track company-wide progress"
          paragraph="See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again."
          number="01"
        />
        <Li
          title="Advanced built-in reports"
          paragraph="Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed."
          number="02"
        />
        <Li
          title="Everything you need in one place"
          paragraph="Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution."
          number="03"
        />
      </ul>
    </>
  );
};

export default Ul;
