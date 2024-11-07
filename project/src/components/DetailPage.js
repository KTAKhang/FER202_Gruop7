import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from '../data'; // Import mảng dữ liệu
import "../components/css/DetailGun.css";
const DetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const item = items.find((item) => item.id === parseInt(id)); // Tìm đối tượng trong mảng theo ID

  // Nếu không tìm thấy đối tượng, có thể hiển thị thông báo
  if (!item) {
    return <div>Không tìm thấy thông tin chi tiết.</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/bcn" className="btn btn-secondary mb-3">Back To Home</Link> 
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} style={{ width: '1000', height: '580px', objectFit: 'cover' }} />
      <p><strong>Nguồn gốc:</strong> {item.origin}</p>
      <p><strong>Mô tả:</strong> {item.description}</p>
      <p><strong>Thành viên:</strong></p>
      <ul>
        {item.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPage;
