import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function IzbrannAxios() {
  const [izbranArr, setIzbranArr] = useState([]);

  useEffect(() => {
    const storedArr = JSON.parse(localStorage.getItem("IzbranArr")) || [];
    setIzbranArr(storedArr);
  }, []);

  const handleRemoveFromSelected = (item) => {
    const updatedArr = izbranArr.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setIzbranArr(updatedArr);
    localStorage.setItem("IzbranArr", JSON.stringify(updatedArr));
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "1.5%",
      }}
    >
      {izbranArr.map((item, index) => (
        <div
          key={index}
          style={{
            width: "22%",
            border: "1px solid #000",
            marginBottom: "4vh",
            background: "#000",
            color: "#fff",
          }}
        >
          <div
            style={{
              padding: "1%",
            }}
          >
            <img
              src={item.url}
              style={{
                width: "100%",
              }}
              alt={item.title}
            />
            <p
              style={{
                width: "70%",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              {item.title}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "2vh 0",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "80%",
              }}
              onClick={() => handleRemoveFromSelected(item)}
            >
              Удалить из избранного
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
