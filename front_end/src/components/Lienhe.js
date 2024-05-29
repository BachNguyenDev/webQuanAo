import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lienhe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý form ở đây, ví dụ: gửi dữ liệu đến server
    console.log('Form data submitted:', formData);

    // Điều hướng về trang chủ hoặc trang khác có Header
    navigate('/');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h2>Liên hệ</h2>
                <label htmlFor="customerName">Tên khách hàng</label>
                <input
                  type="text"
                  className="form-control"
                  name="customerName"
                  id="customerName"
                  aria-describedby="name_text"
                  placeholder="Nhập tên khách hàng"
                  value={formData.customerName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  aria-describedby="phone_text"
                  placeholder="Nhập số điện thoại"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Nhập email </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="email_text"
                  placeholder="Nhập email vào"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-info">
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lienhe;
