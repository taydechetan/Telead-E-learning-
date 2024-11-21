import { HOME } from '@angular/cdk/keycodes'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Promocard from '../components/promocard'
import Card from '../components/card'
import Mentors from '../components/mentors'
import Categorysection from '../components/categorysection'
import Login from '../screen/loginflow/login'
import Register from '../screen/loginflow/register'

export default function publicrouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='header' element={<Header />} />
                    <Route path='promocard' element={<Promocard />} />
                    <Route path='card' element={<Card />} />
                    <Route path='mentors' element={<Mentors />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='categorysection' element={<Categorysection />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

