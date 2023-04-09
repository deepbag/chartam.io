import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import _ from "lodash";

const TableCustom = ({ head, body }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {_.map(head, (item, index) => {
              return (
                <TableCell key={index} sx={{  width: item?.width }}>
                  {item.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(body, (item, index) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {_.map(head, (itemIn, indexIn) => {
                  return (
                    <TableCell component="th" scope="row" key={indexIn}>
                      {
                        item[
                          _.chain(itemIn.label)
                            .trim()
                            .replace(/\s+/g, "")
                            .toLower()
                            .value()
                        ]
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCustom;
