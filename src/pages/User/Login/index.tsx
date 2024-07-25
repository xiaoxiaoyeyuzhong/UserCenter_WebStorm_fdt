import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { Tabs, message, Divider } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';
import { Link } from 'react-router-dom';

const useStyles = createStyles(({ token }) => ({
  action: {
    marginLeft: '8px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: token.colorPrimaryActive,
    },
  },
  lang: {
    width: 42,
    height: 42,
    lineHeight: '42px',
    position: 'fixed',
    right: 16,
    borderRadius: token.borderRadius,
    ':hover': {
      backgroundColor: token.colorBgTextHover,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
    backgroundSize: '100% 100%',
  },
}));
const Lang = () => {
  return null; // 确保返回null而不是空对象
};
const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();
  /* 这里定义的fetchUserInfo首先获取当前用户信息，
     然后设置initialState中的currentUser，将用户信息变成全局可用的信息*/
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const user = await login({ ...values, type });
      if (user) {
        message.success('登录成功！');
        await fetchUserInfo();
        // 重定向到主页或用户中心
        history.push('/');
        return;
      }
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };


  return (
    <div className={styles.container}>
      <Helmet>
        <title>{'登录'} - {Settings.title}</title>
      </Helmet>
      <Lang />
      <div style={{ flex: '1', padding: '32px 0' }}>
        <LoginForm
          contentStyle={{ minWidth: 280, maxWidth: '75vw' }}
          logo={<img alt="logo" src="/img/userCenter_fdt_logo.jpg" />}
          title="用户中心_田"
          subTitle="用户登录界面"
          initialValues={{ autoLogin: true }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType} centered items={[{ key: 'account', label: '账户密码登录' }]} />
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{ size: 'large', prefix: <UserOutlined /> }}
                placeholder={'请输入账号'}
                rules={[{ required: true, message: '账号是必填项！' }]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{ size: 'large', prefix: <LockOutlined /> }}
                placeholder={'请输入密码'}
                rules={[
                  { required: true, message: '密码是必填项！' },
                  { min: 8, type: 'string', message: '密码长度不小于8！' },
                ]}
              />
            </>
          )}
          <div style={{ marginBottom: 24 }}>
            <ProFormCheckbox noStyle name="autoLogin">自动登录</ProFormCheckbox>
            <Divider type="vertical" />
            {/*<Link to="/user/register" >注册</Link>*/}
            <a
              style={{ float: 'right' }}
              href={'/user/register'}
              target="_blank"
              rel={'noreferrer'}
            >
              注册
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
