
const PrimaryButton = ({title}) => {
  return (
    <div className="flex justify-center my-10">
        <button className="btn outline-none hover:bg-rose-400  border-b-4 border-b-rose-400 hover:text-white uppercase">{title}</button>
    </div>
  );
};

export default PrimaryButton;