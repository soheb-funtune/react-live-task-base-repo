import React, { useState } from "react";
import styled from "styled-components";
// import UpArrow  from '../../assets/'
import { BiSolidUpArrow } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa";
const TableCompo = () => {
  const [sortItem, setSortItem] = useState([]);
  const [contentArr, seContentArr] = useState([
    {
      id: 1,
      Companies: "Fyntune",
      Clicks: 402,
      Cost: 442,
      Conversion: 8,
      Revenue: 8000,
    },
    {
      id: 3,
      Companies: "Cosmetics",
      Clicks: 712,
      Cost: 4004,
      Conversion: 10,
      Revenue: 5568,
    },
    {
      id: 2,
      Companies: "Tata",
      Clicks: 222,
      Cost: 2200,
      Conversion: 2,
      Revenue: 16568,
    },
  ]);
  const arr = ["Companies", "Clicks", "Cost", "Conversion", "Revenue"];

  const handleClick = (item) => {
    const ar = [4, 2, 5, 3, 622, 54, 2, 4];
    const res =
      sortItem?.[1] == "ace"
        ? contentArr?.sort((a, b) => a?.[item] - b?.[item])
        : contentArr?.sort((a, b) => b?.[item] - a?.[item]);
    // const desRes = ar?.sort((a, b) => b - a);
    console.log({ res });
  };
  return (
    <div>
      <HeadingDiv>
        {arr?.map((item, i) => (
          <b
            key={i}
            onClick={() => {
              handleClick(item);
              setSortItem(
                sortItem?.[0] == item && sortItem?.[1] == "ace"
                  ? [item, "dec"]
                  : [item, "ace"]
              );
            }}
          >
            {item}
            {`  `}
            {sortItem?.[0] === item && sortItem?.[1] == "dec" ? (
              <BiSolidUpArrow />
            ) : (
              <FaSortDown />
            )}
          </b>
        ))}
      </HeadingDiv>
      <TableBody>
        {contentArr?.map(
          ({ Companies, Clicks, Cost, Conversion, Revenue }, i) => (
            <SingleRow key={i + Companies}>
              <span>{Companies}</span>
              <span>{Clicks}</span>
              <span>USD {Cost}</span>
              <span>{Conversion}</span>
              <span>USD {Revenue}</span>
            </SingleRow>
          )
        )}
      </TableBody>
    </div>
  );
};

export default TableCompo;

const HeadingDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  padding: 5px 20px;
  margin-bottom: 5px;
  border-bottom: 1px solid lightgray;

  b {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
  }

  & > b:first-child {
    text-align: left;
  }
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  padding: 5px 20px;
  border-bottom: 1px solid lightgray;

  span {
    text-align: center;
    font-size: 12px;
  }
  & > span:first-child {
    text-align: left;
  }
`;
