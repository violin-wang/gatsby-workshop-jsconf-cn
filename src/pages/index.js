import React from "react";
import { Link } from "gatsby";

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>首页</h1>
    <p>Hello Shanghai!</p>
    <Link to="/about/">关于我&rarr;</Link>
  </Layout>
);
