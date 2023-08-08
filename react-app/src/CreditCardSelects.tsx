import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface CreditCardSelectsProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  name: string;
}

const CreditCardSelectBox: React.FC<CreditCardSelectsProps> = ({
  value,
  onChange,
  name,
}) => {
  return (
    <Box sx={{ minWidth: 100, maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id={`demo-simple-select-label-${name}`}>Name</InputLabel>
        <Select
          labelId={`demo-simple-select-label-${name}`}
          id={`demo-simple-select-${name}`}
          value={value}
          label="Name"
          onChange={onChange}
          name={name}
        >
          <MenuItem value={"Bank of America Customized Cash Rewards"}>
            Bank of America Customized Cash Rewards
          </MenuItem>
          <MenuItem value={"Bank of America Unlimited Cash Rewards"}>
            Bank of America Unlimited Cash Rewards
          </MenuItem>
          <MenuItem value={"Wells Fargo Active Cash"}>
            Wells Fargo Active Cash
          </MenuItem>
          <MenuItem value={"American Express Blue Cash Preferred"}>
            American Express Blue Cash Preferred
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CreditCardSelectBox;
