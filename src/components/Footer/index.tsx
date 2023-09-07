import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import { WELCOME, XUXI } from '@/constants';
const Footer: React.FC = () => {
  const defaultMessage = '深信大数据出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage}{' '}
        </>
      }
      links={[
        {
          key: '欢迎你加入星球 ',
          title: '学习圈子',
          href: XUXI,
          blankTarget: true,
        },
        {
          key: '#青青子衿博客#',
          title: '#青青子衿博客# ',
          href: WELCOME,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/mzijin',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
