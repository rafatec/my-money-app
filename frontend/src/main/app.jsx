import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Dashboard from '../dashboard/dashboard'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <h1>Conteudo</h1>
            <Routes />
        </div>
        <Footer />
    </div>
)