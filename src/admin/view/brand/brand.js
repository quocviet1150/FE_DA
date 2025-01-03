import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

const Brands = () => {
    return (
        <div >
            <div className="breadcrumb">
                <a href="/admin/dashboard" className="breadcrumb-link">
                    Dashboard
                </a>
                <span className="breadcrumb-separator"> / </span>
                <span className="breadcrumb-active">Brand</span>
            </div>
            <div className="background-f3f4f7">
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">STT</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Tên thương hiệu</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Ngày tạo</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Ngày cập nhật</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Chức năng</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow active>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>@mdo</CTableDataCell>
                            <CTableDataCell>@mdo</CTableDataCell>
                            <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </div>
        </div>
    );
}
export default Brands;

