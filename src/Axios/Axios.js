
import React, { useEffect, useState } from "react";
import "./axois.css";
import { Button } from "@mui/material";

export default function Axios({ apiData }) {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("IzbranArr", JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleAddToSelected = (item) => {
    const isAlreadySelected = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );
    if (!isAlreadySelected) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          padding: "1.5%",
        }}
      >
        {apiData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "22%",
              border: "1px solid #000",
              marginBottom: "4vh",
              marginLeft:'2vw',
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
                  height:'40%'
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
                onClick={() => handleAddToSelected(item)}
              >
                Добавить в избранное
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
