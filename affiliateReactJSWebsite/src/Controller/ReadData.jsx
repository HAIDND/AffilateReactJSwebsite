import { useState, useEffect } from "react";
import Papa from "papaparse";

const readFile = (path, setData) => {
  const fetchData = async () => {
    const response = await fetch(path);
    const text = await response.text();

    Papa.parse(text, {
      header: true, // Chuyển mỗi dòng thành object
      skipEmptyLines: true,
      complete: (result) => setData(result.data),
    });
  };

  fetchData();
};
///read by categoty
const fillterCategory = (data, category) => {
  return data.filter((item) => item.type === category);
};
export default function CsvReader({ typeProduct, filePath, data, setData }) {
  useEffect(() => {
    readFile(filePath, setData); // Gọi hàm đọc file CSV khi component mount
  }, [filePath]); // Chạy khi filePath thay đổi
}
