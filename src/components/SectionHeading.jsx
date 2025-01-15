
const SectionHeading = ({title, heading}) => {
  return (
    <div className="w-64 mx-auto text-center my-12">
        <h4 className="text-orange-400">---{title}---</h4>
        <hr/>
      <h1 className="text-2xl font-bold my-4 uppercase">{heading}</h1>
      <hr className="mb-10" />
    </div>
  );
};

export default SectionHeading;