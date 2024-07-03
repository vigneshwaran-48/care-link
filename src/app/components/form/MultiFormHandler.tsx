"use client";

import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Page {
  index: number;
  element: ReactElement;
}

interface Props {
  pages: Page[];
  onSubmit: () => void;
}

const MultiFormHandler = ({ pages, onSubmit }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previousPage, setPreviousPage] = useState<number>(0);

  const next = () => {
    if (currentPage >= pages.length) {
      return;
    }
    setPreviousPage(currentPage);
    setCurrentPage(currentPage + 1);
  };

  const previous = () => {
    if (currentPage <= 1) {
      return;
    }
    setPreviousPage(currentPage);
    setCurrentPage(currentPage - 1);
  };

  const delta = currentPage - previousPage;

  const page = pages.find((page) => page.index === currentPage)?.element;

  return (
    <motion.div
      key={currentPage}
      initial={{ x: delta > 0 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center overflow-y-scroll hide-scrollbar"
    >
      {page}
      <div className="flex w-full justify-between items-center p-2 mt-4">
        <button
          onClick={previous}
          className="border-none rounded p-2 text-[20px] bg-white px-4"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="text-other-text bg-other-bg border-none rounded p-2 text-[20px]"
          onClick={currentPage === pages.length ? onSubmit : next}
        >
          {currentPage === pages.length ? "Submit" : "Next"}
        </button>
      </div>
    </motion.div>
  );
};

export default MultiFormHandler;
