import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import {
    CChartBar,
    CChartLine
} from '@coreui/react-chartjs';
import React from 'react';
import './dashboard.css';

const Dashboards = () => {
    const random = () => Math.round(Math.random() * 100)
    return (
        <>
            <div className="breadcrumb">
                <span className="breadcrumb-active">Dashboard</span>
            </div>

            <div className="background-f3f4f7" style={{ padding: '1%' }}>
                <CRow>
                    <CCol xs={12}>
                    </CCol>
                    <CCol xs={6}>
                        <CCard className="mb-4" style={{ height: '60vh' }}>
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
                        <CCard className="mb-4" style={{ height: '60vh' }}>
                            <CCardHeader>
                                Line Chart
                            </CCardHeader>
                            <CCardBody>
                                <CChartLine
                                    data={{
                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                        datasets: [
                                            {
                                                label: 'My First dataset',
                                                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                                borderColor: 'rgba(220, 220, 220, 1)',
                                                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                                pointBorderColor: '#fff',
                                                data: [random(), random(), random(), random(), random(), random(), random()],
                                            },
                                            {
                                                label: 'My Second dataset',
                                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                                borderColor: 'rgba(151, 187, 205, 1)',
                                                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                                pointBorderColor: '#fff',
                                                data: [random(), random(), random(), random(), random(), random(), random()],
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