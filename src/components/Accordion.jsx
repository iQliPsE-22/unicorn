import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const [selected, setSelected] = useState(null); // to store id of clicked-item
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);  // to check multi-selection feature
  const [multiSelected, setMultiSelected] = useState([]);// to store multiple ids 

  const Datas = [
    {
      id: 1,
      title: "Section 1",
      content: "This is the content for section 1."
    },
    {
      id: 2,
      title: "Section 2",
      content: "This is the content for section 2."
    },
    {
      id: 3,
      title: "Section 3",
      content: "This is the content for section 3."
    },
    {
      id: 4,
      title: "Section 4",
      content: "This is the content for section 4."
    },
    {
      id: 5,
      title: "Section 5",
      content: "This is the content for section 5."
    }
  ];

  const handleToggle = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelected(cpyMultiple);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            {enableMultiSelection ? "Disable" : "Enable"} Multi-Selection Feature
          </button>
        </div>
        <div className="heading text-center mb-6">
          <h1 className="text-3xl font-bold">Accordion Menu</h1>
        </div>
        <div className="items max-w-lg mx-auto space-y-4">
          {Datas && Datas.length > 0 ? (
            Datas.map((data) => {
              const isSelected =
                enableMultiSelection
                  ? multiSelected.includes(data.id)
                  : selected === data.id;
              return (
                <div
                  className="accordion-item border border-gray-200 rounded-md overflow-hidden transition-all duration-500"
                  key={data.id}
                >
                  <div
                    className="title flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(data.id)
                        : () => handleToggle(data.id)
                    }
                  >
                    <h2 className="text-xl font-medium">{data.title}</h2>
                    {isSelected ? (
                      <IoIosArrowUp size={24} />
                    ) : (
                      <IoIosArrowDown size={24} />
                    )}
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isSelected ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}`}
                  >
                    <p className="text-gray-700">{data.content}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Data Found!!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;


