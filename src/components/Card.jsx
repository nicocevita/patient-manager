import React from "react";
import useGlobalStore from "../store/useGlobalStore";
import { ReactComponent as ChevronDown } from "../assets/chevronDown.svg";
import { ReactComponent as ChevronUp } from "../assets/chevronUp.svg";
import { ReactComponent as TrashCan } from "../assets/trashCan.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";

const Card = ({
  name,
  avatar,
  description,
  website,
  id,
  setOpen,
  setModalDeleteOpen,
}) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const { setpatientInitialValue } = useGlobalStore();

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="shadow-md rounded-lg bg-white m-1 border flex h-16 justify-between"
        key={id}
      >
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="h-10 w-10 rounded-full ml-2"
          />
          <p className="text-lg font-semibold text-black ml-5">{name}</p>
        </div>
        <div className="flex">
          <div className="w-8 m-auto" onClick={toggleExpanded}>
            {isExpanded ? <ChevronDown /> : <ChevronUp />}
          </div>
          <div
            className="w-8 ml-5 m-auto"
            onClick={() => {
              setOpen(true);
              setpatientInitialValue({
                name,
                description,
                website,
                id,
                avatar,
              });
            }}
          >
            <Edit />
          </div>
          <div
            className="w-8 ml-5 mr-2 m-auto"
            onClick={() => {
              setpatientInitialValue({ id });
              setModalDeleteOpen(true);
            }}
          >
            <TrashCan />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="bg-gray-200 m-2 rounded-lg p-4">
            <div className="mb-2">
              <p className="text-sm font-bold text-black">Description:</p>
            </div>
            <p className="text-gray-700">{description}</p>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline "
            >
              Ver website
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
