import React from "react";

export const EmployeeContext =  React.createContext({
    employee : [],
    list: [],
    addEmployeeToTheList: () => {},
})