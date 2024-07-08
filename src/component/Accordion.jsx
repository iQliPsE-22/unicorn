import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const Datas = [
    {
      id: 1,
      title: "Section 1",
      content: "This is the content for section 1.",
    },
    // Add more data objects as needed
  ];

  const handleToggle = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto space-y-4">
        {Datas && Datas.length > 0 ? (
          Datas.map((data) => {
            const isSelected = selected === data.id;
            return (
              <div
                className="accordion-item border border-gray-200 rounded-md overflow-hidden transition-all duration-500"
                key={data.id}
              >
                <div
                  className="title flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                  onClick={() => handleToggle(data.id)}
                >
                  <h2 className="text-xl font-medium">{data.title}</h2>
                  {isSelected ? (
                    <IoIosArrowUp size={24} />
                  ) : (
                    <IoIosArrowDown size={24} />
                  )}
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isSelected
                      ? "max-h-96 p-4 opacity-100"
                      : "max-h-0 p-0 opacity-0"
                  }`}
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
  );
};

export default Accordion;
