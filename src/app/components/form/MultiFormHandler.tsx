"use client";

import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";

interface Page {
  index: number;
  element: ReactElement;
}

interface Props {
  pages: Page[];
}

const MultiFormHandler = ({ pages }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previousPage, setPreviousPage] = useState<number>(0);

  const next = () => {
    if (currentPage >= pages.length) {
        return;
    }
    setCurrentPage(currentPage + 1);
    setPreviousPage(previousPage + 1);
  };

  const previous = () => {
    if (currentPage <= 1) {
        return;
    }
    setCurrentPage(currentPage - 1);
    setPreviousPage(previousPage - 1);
  };

  const delta = currentPage - previousPage;

  const page = pages.find((page) => page.index === currentPage)?.element;

  return (
    <motion.div
      initial={{ x: delta > 0 ? "50%" : "-50%", y: 0 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full h-full flex flex-col"
    >
      {page}
      <div className="flex w-full justify-between">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </motion.div>
  );
};

export default MultiFormHandler;
