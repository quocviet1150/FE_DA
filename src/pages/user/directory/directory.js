import React, { useState } from 'react';
import './directory.css';

const data = [
  { id: 1, name: 'Thời Trang Nam', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 2, name: 'Điện Thoại & Phụ Kiện', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 3, name: 'Thiết Bị Điện Tử', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 4, name: 'Máy Tính & Laptop', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 5, name: 'Máy Ảnh & Máy Quay Phim', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 6, name: 'Đồng Hồ', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 7, name: 'Giày Dép Nam', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 8, name: 'Thiết Bị Điện Gia Dụng', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 9, name: 'Thể Thao & Du Lịch', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 10, name: 'Ô Tô & Xe Máy & Xe Đạp', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 11, name: 'Thời Trang Nữ', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 12, name: 'Mẹ & Bé', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 13, name: 'Nhà Cửa & Đời Sống', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 14, name: 'Sắc Đẹp', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 15, name: 'Sức Khỏe', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 16, name: 'Giày Dép Nữ', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 17, name: 'Túi Ví Nữ', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
  { id: 18, name: 'Phụ Kiện & Trang Sức Nữ', img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' },
];

const ITEMS_PER_PAGE = 20;

const Directorys = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  let currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  while (currentData.length < ITEMS_PER_PAGE) {
    currentData.push({ id: `empty-${currentData.length}`, name: '', img: '' });
  }

  const firstRow = currentData.slice(0, 10);
  const secondRow = currentData.slice(10, 20);

  return (
    <div className="directory-container">
      <div className="directory-row">
        {firstRow.map((item) => (
          <div key={item.id} className={`directory-item ${!item.name ? 'empty' : ''}`}>
            {item.img && <img src={item.img} alt={item.name} />}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="directory-row">
        {secondRow.map((item) => (
          <div key={item.id} className={`directory-item ${!item.name ? 'empty' : ''}`}>
            {item.img && <img src={item.img} alt={item.name} />}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {data.length > ITEMS_PER_PAGE && (
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            Prev
          </button>
          <button onClick={handleNext} disabled={currentPage + 1 === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Directorys;