
import './App.css';
import { useState } from 'react';
import * as React from "react";

let dropdowns = [
  {
    name: "dropdown1",
    options: ["A", "B", "C", "D", "E"]
  },
  {
    name: "dropdown2",
    options: ["A", "B", "C", "D", "E"]
  },
  {
    name: "dropdown3",
    options: ["A", "B", "C", "D", "E"]
  }
];




export default function App() {
  const [selected, setSelected] = React.useState([]);
  const [value, setValues] = React.useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(value);
  }
  return (
    <div className="App">
      {dropdowns.map((dropdown, index) => {
        const dropdownItem =
          selected &&
          selected.length &&
          selected.filter((selectedItem) => !!selectedItem[dropdown.name]);
        const dropdownItemName =
          (dropdownItem && dropdownItem[0] && dropdownItem[0][dropdown.name]) ||
          "";
        const key = `dropdown-${dropdown.name}-${index}`;
    
        
        return (
          <select
            key={key}
            name={dropdown.name}
            value={dropdownItemName}
            onChange={(event) => {
              const newSelected = selected.length
                ? selected.map((selectedItem) => {
                    if (selectedItem[dropdown.name]) {
                      const newSelectedItem = {
                        [dropdown.name]: event.target.value
                      };

                      return newSelectedItem;
                    }
                    //From(selectedItem);
                    setValues(selectedItem)
                    console.log(selectedItem);
                    return selectedItem;
                  })
                : [{ [dropdown.name]: event.target.value }];

              if (
                !newSelected.filter(
                  (filteredItem) => !!filteredItem[dropdown.name]
                ).length
              ) {
                newSelected.push({ [dropdown.name]: event.target.value });
              }

              setSelected(newSelected);
            }}
          >
            <option></option>
            {dropdown.options
              .filter((option) => {
                if (selected.length) {
                  return !selected.filter(
                    (selectedItem) =>
                      selectedItem[Object.keys(selectedItem)[0]] === option &&
                      Object.keys(selectedItem)[0] !== dropdown.name
                  ).length;
                }

                return true;
              })
              .map((option, index) => {
                const key = `dropdown-${dropdown.name}-${option}-${index}`;
                

                return (
                  <option key={key} value={option}>
                    {option}
                  </option>
                );
                
              })}
          </select>
        );
       
      })}

            <form onSubmit = {handleSubmit}>
            <button type = 'submit'>Submit</button>
        </form>
    </div>
    
  );
  
}
