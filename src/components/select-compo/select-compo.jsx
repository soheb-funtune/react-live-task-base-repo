import React from "react";
import "./select-compo.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectCompo = ({ text }) => {
  return (
    <FormControl sx={{ mb: 1, minWidth: 120, border: "none" }} size="small">
      <InputLabel id="demo-simple-select-label">{text}</InputLabel>
      <Select
        style={{ border: "none" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        //   value={age}
        label="Age"
        //   onChange={handleChange}
      >
        <MenuItem value={""}>Select</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCompo;
