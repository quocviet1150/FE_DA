import { CButton, CFormInput, CFormSelect, CPagination, CPaginationItem, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useState } from "react";
import './category.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    const data = [
        { name: "Mark Otto", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "motto", createdDate: "2023-01-01", updatedDate: "2023-01-05" },
        { name: "Jacob Thornton", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jthornton", createdDate: "2023-02-01", updatedDate: "2023-02-05" },
        { name: "Larry Bird", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "lbird", createdDate: "2023-03-01", updatedDate: "2023-03-05" },
        { name: "John Doe", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jdoe", createdDate: "2023-04-01", updatedDate: "2023-04-05" },
        { name: "Jane Smith", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jsmith", createdDate: "2023-05-01", updatedDate: "2023-05-05" },
        { name: "Mark Otto", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "motto", createdDate: "2023-01-01", updatedDate: "2023-01-05" },
        { name: "Jacob Thornton", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jthornton", createdDate: "2023-02-01", updatedDate: "2023-02-05" },
        { name: "Larry Bird", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "lbird", createdDate: "2023-03-01", updatedDate: "2023-03-05" },
        { name: "John Doe", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jdoe", createdDate: "2023-04-01", updatedDate: "2023-04-05" },
        { name: "Jane Smith", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jsmith", createdDate: "2023-05-01", updatedDate: "2023-05-05" },
        { name: "Mark Otto", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "motto", createdDate: "2023-01-01", updatedDate: "2023-01-05" },
        { name: "Jacob Thornton", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jthornton", createdDate: "2023-02-01", updatedDate: "2023-02-05" },
        { name: "Larry Bird", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "lbird", createdDate: "2023-03-01", updatedDate: "2023-03-05" },
        { name: "John Doe", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jdoe", createdDate: "2023-04-01", updatedDate: "2023-04-05" },
        { name: "Jane Smith", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jsmith", createdDate: "2023-05-01", updatedDate: "2023-05-05" },
        { name: "Mark Otto", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "motto", createdDate: "2023-01-01", updatedDate: "2023-01-05" },
        { name: "Jacob Thornton", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jthornton", createdDate: "2023-02-01", updatedDate: "2023-02-05" },
        { name: "Larry Bird", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "lbird", createdDate: "2023-03-01", updatedDate: "2023-03-05" },
        { name: "John Doe", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jdoe", createdDate: "2023-04-01", updatedDate: "2023-04-05" },
        { name: "Jane Smith", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jsmith", createdDate: "2023-05-01", updatedDate: "2023-05-05" },
        { name: "Mark Otto", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "motto", createdDate: "2023-01-01", updatedDate: "2023-01-05" },
        { name: "Jacob Thornton", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jthornton", createdDate: "2023-02-01", updatedDate: "2023-02-05" },
        { name: "Larry Bird", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "lbird", createdDate: "2023-03-01", updatedDate: "2023-03-05" },
        { name: "John Doe", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jdoe", createdDate: "2023-04-01", updatedDate: "2023-04-05" },
        { name: "Jane Smith", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", productType: "jsmith", createdDate: "2023-05-01", updatedDate: "2023-05-05" },
    ];
    const itemsPerPage = 14;
    const [formData, setFormData] = useState({
        name: '',
        productType: '0',
        status: null,
        size: itemsPerPage,
        page: 1,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === 'status' ? (value === '1' ? true : value === '2' ? false : null) : value,
        }));
    };
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setFormData((prevState) => ({
            ...prevState,
            page: page,
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div>
            <div className="breadcrumb">
                <a href="/admin/dashboard" className="breadcrumb-link">
                    Dashboard
                </a>
                <span className="breadcrumb-separator"> / </span>
                <span className="breadcrumb-active">Category</span>
            </div>
            <div className="background-f3f4f7">
                <div className="d-flex w-100 justify-content-between" style={{ backgroundColor: '#fff', padding: '10px 20px', marginBottom: '20px' }}>
                    <div style={{ width: '85%' }}>
                        <div className="d-flex w-100 gap-2">
                            <div className="w-50">
                                <label className="d-flex">Tên danh mục</label>
                                <CFormInput
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{ width: '25%' }}>
                                <label className="d-flex">Loại sản phẩm</label>
                                <CFormSelect
                                    name="productType"
                                    value={formData.productType}
                                    onChange={handleInputChange}>
                                    <option value="0" >--Chọn tất cả--</option>
                                    <option value="1">...</option>
                                </CFormSelect>
                            </div>
                            <div className="" style={{ width: '25%' }}>
                                <label className="d-flex">Trạng thái hoạt động</label>
                                <CFormSelect
                                    name="status"
                                    value={formData.status === true ? '1' : formData.status === false ? '2' : '0'}
                                    onChange={handleInputChange}>
                                    <option value="0" >--Chọn tất cả--</option>
                                    <option value="1">Đang hoạt đông</option>
                                    <option value="2">Không hoạt đông</option>
                                </CFormSelect>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '15%' }} className="d-flex justify-content-center align-items-end gap-2">
                        <CButton color="info" onClick={() => { handleSubmit() }}>
                            Tìm kiếm
                        </CButton>
                        <CButton color="primary" onClick={() => { }}>
                            Thêm mới
                        </CButton>
                    </div>
                </div>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">STT</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Tên danh mục</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Ngày tạo</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Ngày cập nhật</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Chức năng</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {currentData.map((row, index) => (
                            <CTableRow key={index} active={index % 2 === 0}>
                                <CTableHeaderCell scope="row">{index + 1 + (currentPage - 1) * 10}</CTableHeaderCell>
                                <CTableDataCell width={150}>
                                    <img src={row.image ? row.image : "https://via.placeholder.com/150"} alt=""
                                        style={{ width: "25px", height: "25px", borderRadius: '50%' }} />
                                </CTableDataCell>
                                <CTableDataCell>{row.name}</CTableDataCell>
                                <CTableDataCell>{row.productType}</CTableDataCell>
                                <CTableDataCell>{row.createdDate}</CTableDataCell>
                                <CTableDataCell>{row.updatedDate}</CTableDataCell>
                                <CTableDataCell width={200}>
                                    <div className="d-flex gap-2 justify-content-center">
                                        <div>
                                            <FontAwesomeIcon icon={faEdit} color="blue" className="icon-category"/>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faRemove} color="red" className="icon-category"/>
                                        </div>
                                    </div>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
                <CPagination aria-label="Page navigation example" align="end">
                    <CPaginationItem
                        aria-label="Previous"
                        disabled={currentPage === 1}
                        onClick={() => handlePageClick(currentPage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </CPaginationItem>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <CPaginationItem
                            key={index}
                            active={currentPage === index + 1}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </CPaginationItem>
                    ))}
                    <CPaginationItem
                        aria-label="Next"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageClick(currentPage + 1)}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                </CPagination>
            </div>
        </div>
    );
}
export default Categories;

