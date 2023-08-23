import React, { ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import styles from "../styling/MainBody.module.css";

interface Category {
  id: string;
  label: string;
}

interface SpendingCategoryFieldsProps {
  categories: Category[];
  values: { [key: string]: number };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps: { min: number; step: string };
  labelStyles: React.CSSProperties;
  textFieldStyles: React.CSSProperties;
}

const SpendingCategoryFields: React.FC<SpendingCategoryFieldsProps> = ({
  categories,
  values,
  onChange,
  inputProps,
  labelStyles,
  textFieldStyles,
}) => {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.spendingCategories}>
        {categories.map((category) => (
          <TextField
            key={category.id}
            id={category.id}
            label={category.label}
            variant="outlined"
            size="small"
            placeholder="0"
            value={values[category.id]}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              inputProps: inputProps,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            style={textFieldStyles}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SpendingCategoryFields;
