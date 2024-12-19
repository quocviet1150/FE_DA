import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import {
    CChartBar,
    CChartLine
} from '@coreui/react-chartjs';
import React from 'react';
import WidgetsBrand from '../widgets/widgetsBrand';
import './dashboard.css';

const Dashboards = () => {
    const random = () => Math.round(Math.random() * 100)
    return (
        <>
            <div className="breadcrumb">
                <span className="breadcrumb-active">Dashboard</span>
            </div>

            <div className="background-f3f4f7" style={{
                padding: '2% 5%',
                height: '88vh',
                overflowY: 'auto',
            }}>
                <WidgetsBrand />
                <CRow style={{ marginTop: '2%' }}>
                    <CCol xs={6}>
                        <CCard className="mb-4">
                            <CCardHeader>
                                Bar Chart
                            </CCardHeader>
                            <CCardBody>
                                <CChartBar
                                    data={{
                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                        datasets: [
                                            {
                                                label: 'GitHub Commits',
                                                backgroundColor: '#f87979',
                                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                            },
                                        ],
                                    }}
                                    labels="months"
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xs={6}>
                        <CCard className="mb-4">
                            <CCardHeader className='d-flex w-100 justify-content-flex-end'>
                                <div className='d-flex w-50'>Line Chart</div>
                                <div className='d-flex w-50'>
                                    <CCol sm={7} className="d-none d-md-block">
                                        <CButtonGroup className="float-end me-3">
                                            {['month', 'year'].map((value) => (
                                                <CButton
                                                    color="outline-secondary"
                                                    key={value}
                                                    className="mx-0"
                                                    active={value === 'year'}
                                                >
                                                    {value}
                                                </CButton>
                                            ))}
                                        </CButtonGroup>
                                    </CCol>
                                </div>
                            </CCardHeader>
                            <CCardBody>
                                <CChartLine
                                    data={{
                                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'],
                                        datasets: [
                                            {
                                                label: 'ONE',
                                                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                borderColor: 'rgba(220, 220, 220, 1)',
                                                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                pointBorderColor: '#fff',
                                                data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
                                            },
                                            {
                                                label: 'TWO',
                                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                borderColor: 'rgba(151, 187, 205, 1)',
                                                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                pointBorderColor: '#fff',
                                                data: [random(), random(), random(), random(), random(), random(), random() , random(), random(), random(), random(), random()]
                                            },
                                        ],
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

            </div>
        </>
    );
}
export default Dashboards;