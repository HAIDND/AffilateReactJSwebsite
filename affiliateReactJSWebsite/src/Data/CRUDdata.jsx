import Papa from "papaparse";
//link
const filePath = "./linkkeyboard.csv"; // Tên file CSV

export function readFile(filePath) {
  const [data, setData] = useState([]);

  // Xử lý file CSV khi người dùng chọn file
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true, // Chuyển mỗi dòng thành object
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data); // Lưu dữ liệu vào state
      },
    });
  };
}
