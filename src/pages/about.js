import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>关于我</h1>
    <p>这个是我的个人站点。</p>
    <Link to="/">&larr;返回首页</Link>
  </Layout>
)