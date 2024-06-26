import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'programNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          // 点击版权信息默认打开新的页面
          blankTarget: true,
        },
        {
          key: '知识星球',
          title: 'planet',
          href: 'https://wx.zsxq.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 萧萧暮雨 GitHub</>,
          href: 'https://github.com/xiaoxiaoyeyuzhong',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
