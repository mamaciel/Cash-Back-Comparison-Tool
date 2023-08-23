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
    <Box sx={{ width: "25%" }}>
      <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Select value={value} label="Name" onChange={onChange} name={name}>
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
          <MenuItem value={"American Express Blue Cash Everyday"}>
            American Express Blue Cash Everyday
          </MenuItem>
          <MenuItem value={"Capital One SavorOne"}>
            Capital One SavorOne
          </MenuItem>
          <MenuItem value={"Chase Freedom Unlimited"}>
            Chase Freedom Unlimited
          </MenuItem>
          <MenuItem value={"Citi Double Cash"}>Citi Double Cash</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CreditCardSelectBox;
