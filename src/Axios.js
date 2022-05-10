import React from 'react'
// import FirstRequest from './axios/1-first-request'
import SetupHeaders from './examples/2-setup-headers'
import PostRequest from './examples/3-post-request'
import Title from './components/Title'
import './axios/global';
import GlobalInstance from './examples/4-global-defaults';
import CustomInstance from './examples/5-custom-intance';
import Interceptors from './examples/6-interceptors';
const Axios = () => {
  return (
    <div>
        <Title/>
        {/* <FirstRequest/> */}
        <SetupHeaders/>
        <PostRequest/>
        {/* <GlobalInstance/> */}
        {/* <CustomInstance/> */}
        <Interceptors/>
    </div>
  )
}

export default Axios