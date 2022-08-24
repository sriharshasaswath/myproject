import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Dashboard, Page404 } from '../containers'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Routes>
    <Route exact path="/dashboard" element={<Dashboard/>} />
    <Route element={<Page404/>} />
  </Routes>
)